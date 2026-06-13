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

const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement
  // Fallback icon (barrier block) if CDN fails
  img.src = 'https://cdn.jsdelivr.net/gh/InventivetalentDev/minecraft-assets@1.20.2/assets/minecraft/textures/item/barrier.png'
  img.onerror = null // prevent infinite loop if fallback also fails
}

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
      '--glow-color': asset.glowColor
    };
  }
  return {};
})

// Shimmer gradient động theo glowColor của từng vật phẩm
const shimmerStyle = computed(() => {
  const asset = itemAssetMap[props.itemId];
  const glow = asset?.glowColor || 'rgba(139, 92, 246, 0.6)';
  return {
    background: `linear-gradient(135deg, transparent 25%, ${glow} 50%, transparent 75%)`,
    backgroundSize: '200% 200%',
    willChange: 'background-position',
    maskImage: `url(${imgUrl.value})`,
    webkitMaskImage: `url(${imgUrl.value})`,
    maskSize: 'contain',
    webkitMaskSize: 'contain',
    maskRepeat: 'no-repeat',
    webkitMaskRepeat: 'no-repeat',
    maskPosition: 'center',
    webkitMaskPosition: 'center'
  };
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
      loading="lazy"
      @error="handleImageError"
      class="pixelated w-full h-full object-contain max-w-full max-h-full transition-transform duration-200 active:scale-95"
    />
    
    <!-- Custom CSS masked enchanted glow layer -->
    <!-- Enchanted glow layer — màu shimmer biến thiên theo glowColor của item -->
    <div
      v-if="shouldEnchant"
      class="absolute inset-0 pointer-events-none animate-shimmer mix-blend-color-dodge"
      :style="shimmerStyle"
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
