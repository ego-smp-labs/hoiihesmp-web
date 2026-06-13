<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Props {
  src?: string
  alt?: string
  autoRotate?: boolean
  cameraControls?: boolean
  shadowIntensity?: number
}

withDefaults(defineProps<Props>(), {
  src: '/minecraft_mace__sapixcraft.glb',
  alt: 'Minecraft Mace 3D Model',
  autoRotate: false,
  cameraControls: true,
  shadowIntensity: 1.5
})

const isMounted = ref(false)
const isVisible = ref(false)
const isLoading = ref(true)
const containerRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  isMounted.value = true
  
  if (containerRef.value) {
    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true
        // Ngừng observe ngay khi component đã hiển thị lần đầu để tối ưu
        if (observer && containerRef.value) {
          observer.unobserve(containerRef.value)
        }
      }
    }, { threshold: 0.1, rootMargin: '200px' })
    
    observer.observe(containerRef.value)
  } else {
    // Fallback nếu không gán được ref
    isVisible.value = true
  }
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})

const handleLoad = () => {
  isLoading.value = false
}
</script>

<template>
  <div ref="containerRef" class="relative w-full h-full min-h-[200px] flex items-center justify-center">
    <!-- Show static fallback while mounting / loading / off-screen -->
    <div 
      v-if="!isMounted || !isVisible || isLoading" 
      class="absolute inset-0 flex flex-col items-center justify-center bg-[#100a16]/40 backdrop-blur-sm z-10 select-none pointer-events-none rounded-xl"
    >
      <div class="relative w-28 h-28 flex items-center justify-center">
        <!-- Pixelated fallback icon -->
        <img 
          src="/mace-icon.png" 
          class="w-16 h-16 pixelated animate-bounce opacity-70"
          alt="Mace Loading Fallback"
        />
        <!-- Circular spinner -->
        <div class="absolute inset-0 border-4 border-[#ff55ff]/10 border-t-[#ff55ff] rounded-full animate-spin"></div>
      </div>
      <span class="mt-4 font-outfit text-[11px] font-bold text-[#b7a9ca]/70 uppercase tracking-widest animate-pulse text-center px-4">
        Đang nạp không gian 3D...
      </span>
    </div>

    <!-- Client-only Model Viewer block -->
    <model-viewer
      v-if="isMounted && isVisible"
      :src="src"
      :alt="alt"
      :auto-rotate="autoRotate ? 'true' : undefined"
      :camera-controls="cameraControls ? 'true' : undefined"
      :shadow-intensity="shadowIntensity"
      interaction-prompt="none"
      auto-rotate-delay="0"
      rotation-per-second="10deg"
      touch-action="pan-y"
      class="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing rounded-xl overflow-hidden"
      style="--poster-color: transparent;"
      @load="handleLoad"
    >
    </model-viewer>
  </div>
</template>

<style scoped>
model-viewer {
  width: 100%;
  height: 100%;
  background-color: transparent;
  outline: none;
}
</style>
