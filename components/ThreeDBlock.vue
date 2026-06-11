<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 100
})

const halfSize = computed(() => props.size / 2)
</script>

<template>
  <div
    class="relative flex items-center justify-center pointer-events-none select-none"
    :style="{
      width: size * 1.5 + 'px',
      height: size * 1.5 + 'px',
      perspective: '600px'
    }"
  >
    <div
      class="relative transform-style-3d animate-spin-3d"
      :style="{
        width: size + 'px',
        height: size + 'px',
        transformStyle: 'preserve-3d',
        animation: 'spin3D 15s infinite linear'
      }"
    >
      <!-- FRONT FACE -->
      <div
        class="absolute inset-0 bg-[#3a3540] border-[6px] border-[#595360] flex flex-col justify-between p-2 shadow-inner"
        :style="{
          transform: `translateZ(${halfSize}px)`,
          backfaceVisibility: 'hidden'
        }"
      >
        <div class="w-full h-1 bg-[#1a171e] opacity-40"></div>
        <div class="w-1/2 h-1/2 bg-[#514b59] border-4 border-[#1a171e] self-center"></div>
        <div class="w-full h-1 bg-[#1a171e] opacity-40"></div>
      </div>

      <!-- BACK FACE -->
      <div
        class="absolute inset-0 bg-[#3a3540] border-[6px] border-[#595360] flex flex-col justify-between p-2"
        :style="{
          transform: `rotateY(180deg) translateZ(${halfSize}px)`,
          backfaceVisibility: 'hidden'
        }"
      >
        <div class="w-full h-1 bg-[#1a171e] opacity-40"></div>
        <div class="w-1/2 h-1/2 bg-[#514b59] border-4 border-[#1a171e] self-center"></div>
        <div class="w-full h-1 bg-[#1a171e] opacity-40"></div>
      </div>

      <!-- LEFT FACE -->
      <div
        class="absolute inset-0 bg-[#312b36] border-[6px] border-[#4e4854] flex flex-col justify-between p-2"
        :style="{
          transform: `rotateY(-90deg) translateZ(${halfSize}px)`,
          backfaceVisibility: 'hidden'
        }"
      >
        <div class="w-full h-1 bg-[#1a171e] opacity-40"></div>
        <div class="w-1/2 h-1/2 bg-[#423c4a] border-4 border-[#1a171e] self-center"></div>
        <div class="w-full h-1 bg-[#1a171e] opacity-40"></div>
      </div>

      <!-- RIGHT FACE -->
      <div
        class="absolute inset-0 bg-[#312b36] border-[6px] border-[#4e4854] flex flex-col justify-between p-2"
        :style="{
          transform: `rotateY(90deg) translateZ(${halfSize}px)`,
          backfaceVisibility: 'hidden'
        }"
      >
        <div class="w-full h-1 bg-[#1a171e] opacity-40"></div>
        <div class="w-1/2 h-1/2 bg-[#423c4a] border-4 border-[#1a171e] self-center"></div>
        <div class="w-full h-1 bg-[#1a171e] opacity-40"></div>
      </div>

      <!-- TOP FACE -->
      <div
        class="absolute inset-0 bg-[#4e4854] border-[6px] border-[#6b6473] flex items-center justify-center p-2"
        :style="{
          transform: `rotateX(90deg) translateZ(${halfSize}px)`,
          backfaceVisibility: 'hidden'
        }"
      >
        <div class="w-3/4 h-3/4 border-8 border-[#25202b] rounded-sm flex items-center justify-center bg-[#5c5463]">
          <div class="w-4 h-4 bg-[#25202b]"></div>
        </div>
      </div>

      <!-- BOTTOM FACE -->
      <div
        class="absolute inset-0 bg-[#25202a] border-[6px] border-[#37313d] flex items-center justify-center p-2"
        :style="{
          transform: `rotateX(-90deg) translateZ(${halfSize}px)`,
          backfaceVisibility: 'hidden'
        }"
      >
        <div class="w-3/4 h-3/4 border-8 border-[#15121b] rounded-sm bg-[#2e2934]" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes spin3D {
  0% {
    transform: rotateX(-20deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(-20deg) rotateY(360deg);
  }
}

.transform-style-3d {
  transform-style: preserve-3d;
}
</style>
