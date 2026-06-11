<script setup lang="ts">
import { computed } from 'vue'
import { getCdnUrl, getItemDisplayName, itemAssetMap } from '../data/pixelMap'

interface Props {
  itemId: string
  size?: number
  enchanted?: boolean
  customTitle?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 40,
  enchanted: false
})

const imgUrl = computed(() => getCdnUrl(props.itemId))
const displayName = computed(() => props.customTitle || getItemDisplayName(props.itemId))

const shouldEnchant = computed(() => {
  if (props.enchanted) return true
  // Auto-enchant weapons and specific materials/cores
  return (
    props.itemId.startsWith('mace_') ||
    props.itemId.includes('spear') ||
    props.itemId === 'cursed_sword' ||
    props.itemId === 'enchanted_golden_apple'
  );
})

const customGlowStyle = computed(() => {
  const asset = itemAssetMap[props.itemId];
  if (asset?.glowColor) {
    return {
      '--glow-color': asset.glowColor,
      boxShadow: `0 0 12px ${asset.glowColor}`
    };
  }
  return {};
})
</script>

<template>
  <div
    class="relative inline-flex items-center justify-center select-none shrink-0"
    :style="{ width: size + 'px', height: size + 'px', ...customGlowStyle }"
    :class="{ 'rounded-md glow-purple-pulse': shouldEnchant }"
    :title="displayName"
  >
    <img
      :src="imgUrl"
      :alt="displayName"
      class="pixelated w-full h-full object-contain max-w-full max-h-full transition-transform duration-200 active:scale-95"
    />
    
    <!-- Custom CSS masked enchanted glow layer -->
    <div
      v-if="shouldEnchant"
      class="absolute inset-0 pointer-events-none animate-shimmer mix-blend-color-dodge"
      :style="{
        background: 'linear-gradient(135deg, rgba(255, 85, 255, 0) 25%, rgba(139, 92, 246, 0.6) 50%, rgba(255, 85, 255, 0) 75%)',
        backgroundSize: '200% 200%',
        maskImage: `url(${imgUrl})`,
        webkitMaskImage: `url(${imgUrl})`,
        maskSize: 'contain',
        webkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        webkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        webkitMaskPosition: 'center'
      }"
    />
  </div>
</template>

<style scoped>
@keyframes shimmer {
  0% {
    background-position: 150% 0;
  }
  100% {
    background-position: -50% 0;
  }
}

.animate-shimmer {
  animation: shimmer 2.5s infinite linear;
}
</style>
