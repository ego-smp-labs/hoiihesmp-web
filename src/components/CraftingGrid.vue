<script setup lang="ts">
import { computed } from 'vue'
import PixelIcon from './PixelIcon.vue'
import { playClickSound } from '../utils/audio'
import type { Recipe } from '../data/wikiData'
import { getItemDisplayName } from '../data/pixelMap'

interface Props {
  recipe: Recipe | null
  resultId: string
  resultName: string
  resultTooltip: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'select-item', tooltipText: string): void
}>()

const hasRecipe = computed(() => !!props.recipe)

const handleSlotClick = (tooltipText: string) => {
  playClickSound()
  emit('select-item', tooltipText)
}
</script>

<template>
  <div v-if="!hasRecipe" class="bg-[#120b1a] border border-[#4a3b5c] rounded-lg p-6 text-center text-xs text-[#7b6299] italic">
    Không yêu cầu bàn chế tạo (Nghi thức đặc biệt)
  </div>

  <div v-else class="flex flex-col items-center gap-4">
    <!-- Crafting Table Outer Border (Minecraft UI Gray) -->
    <div class="bg-[#c6c6c6] border-4 border-t-white border-l-white border-r-[#555555] border-b-[#555555] p-3 rounded shadow-xl flex items-center gap-4 select-none">
      
      <!-- Grid 3x3 -->
      <div class="grid grid-cols-3 gap-[2px] bg-[#8b8b8b] border-2 border-[#555555] p-[2px]">
        <template v-for="(row, rowIdx) in recipe!.shape" :key="rowIdx">
          <div
            v-for="(symbol, colIdx) in row"
            :key="`${rowIdx}-${colIdx}`"
            class="w-11 h-11 border-2 border-t-[#373737] border-l-[#373737] border-r-white border-b-white bg-[#8b8b8b] flex items-center justify-center relative transition-colors"
            :class="{
              'hover:bg-[#9d9d9d] cursor-pointer': symbol && recipe!.ingredients[symbol],
              'cursor-default': !symbol || !recipe!.ingredients[symbol]
            }"
            @click="symbol && recipe!.ingredients[symbol] ? handleSlotClick(recipe!.ingredients[symbol].tooltip) : null"
          >
            <!-- Render Item if available -->
            <PixelIcon
              v-if="symbol && recipe!.ingredients[symbol]"
              :itemId="recipe!.ingredients[symbol].itemId"
              :size="28"
            />
            
            <!-- Legend Overlay for symbol letter -->
            <span v-if="symbol" class="absolute top-0.5 left-1 text-[9px] font-vt text-[#ffffff] opacity-70 select-none">
              {{ symbol }}
            </span>
          </div>
        </template>
      </div>

      <!-- Crafting Arrow -->
      <div class="font-vt text-3xl text-[#373737] select-none font-bold drop-shadow-[1px_1px_0_#ffffff]">
        ➔
      </div>

      <!-- Result Container -->
      <div class="bg-[#8b8b8b] border-2 border-[#555555] p-[2px]">
        <div
          @click="handleSlotClick(resultTooltip)"
          class="w-14 h-14 border-4 border-t-[#373737] border-l-[#373737] border-r-white border-b-white bg-[#8b8b8b] hover:bg-[#9d9d9d] flex items-center justify-center cursor-pointer transition-all relative"
        >
          <PixelIcon :itemId="resultId" :size="38" :enchanted="true" />
        </div>
      </div>

    </div>

    <!-- Badges list showing quantities under the grid -->
    <div class="flex flex-wrap gap-1.5 justify-center max-w-xs">
      <span
        v-for="(item, sym) in recipe!.ingredients"
        :key="sym"
        @click="handleSlotClick(item.tooltip)"
        class="bg-[#120b1a] hover:bg-[#4a3b5c]/30 border border-[#4a3b5c] rounded px-2 py-0.5 text-[11px] font-vt text-white cursor-pointer flex items-center gap-1.5 transition-colors"
        :title="getItemDisplayName(item.itemId)"
      >
        <span class="font-bold text-[#ff55ff]">{{ sym }}</span>
        <span class="text-[#e0d7ec]">{{ item.name }}</span>
      </span>
    </div>
  </div>
</template>
