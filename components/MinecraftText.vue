<script setup lang="ts">
import { computed } from 'vue'
import { colorCodes } from '../data/wikiData'

interface Props {
  text: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: ''
})

interface StylePart {
  text: string
  styles: Record<string, string>
}

const lines = computed<StylePart[][]>(() => {
  if (!props.text) return []
  
  const rawLines = props.text.split('|')
  
  return rawLines.map(line => {
    const parts: StylePart[] = []
    let currentText = ""
    let currentStyles: Record<string, string> = {}
    
    let i = 0;
    while (i < line.length) {
      if (line[i] === '&' && i + 1 < line.length) {
        const code = line[i + 1].toLowerCase()
        
        if (colorCodes[code]) {
          if (currentText) {
            parts.push({ text: currentText, styles: { ...currentStyles } })
            currentText = ""
          }
          currentStyles.color = colorCodes[code]
          i += 2
          continue
        } else if (code === 'l') {
          if (currentText) {
            parts.push({ text: currentText, styles: { ...currentStyles } })
            currentText = ""
          }
          currentStyles.fontWeight = "bold"
          i += 2
          continue
        } else if (code === 'o') {
          if (currentText) {
            parts.push({ text: currentText, styles: { ...currentStyles } })
            currentText = ""
          }
          currentStyles.fontStyle = "italic"
          i += 2
          continue
        } else if (code === 'r') {
          if (currentText) {
            parts.push({ text: currentText, styles: { ...currentStyles } })
            currentText = ""
          }
          currentStyles = {}
          i += 2
          continue
        }
      }
      currentText += line[i]
      i++
    }
    
    if (currentText) {
      parts.push({ text: currentText, styles: { ...currentStyles } })
    }
    
    return parts
  })
})
</script>

<template>
  <span class="block font-vt" :class="className">
    <span
      v-for="(line, lineIdx) in lines"
      :key="lineIdx"
      class="block min-h-[1.25em] tracking-wide leading-normal"
    >
      <span
        v-for="(p, pIdx) in line"
        :key="pIdx"
        :style="p.styles"
      >{{ p.text }}</span>
    </span>
  </span>
</template>
