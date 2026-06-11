<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { playClickSound } from '../utils/audio'

const muted = ref(false)

onMounted(() => {
  if (typeof window !== "undefined") {
    // Safely retrieve mute state after mount to prevent SSR mismatch
    muted.value = localStorage.getItem("mace_wiki_muted") === "true"
  }
})

const toggleMute = () => {
  const newState = !muted.value
  muted.value = newState
  if (typeof window !== "undefined") {
    localStorage.setItem("mace_wiki_muted", newState ? "true" : "false")
    if (!newState) {
      setTimeout(playClickSound, 50)
    }
  }
}
</script>

<template>
  <button
    @click="toggleMute"
    :title="muted ? 'Bật âm thanh' : 'Tắt âm thanh'"
    class="flex items-center justify-center p-2 rounded-md border-2 border-[#4a3b5c] bg-[#120b1a] hover:bg-[#ff55ff]/10 hover:border-[#ff55ff]/50 text-[#e0d7ec] hover:text-white transition-all active:scale-95 cursor-pointer"
  >
    <span class="text-base leading-none">
      {{ muted ? "🔇" : "🔊" }}
    </span>
    <span class="font-outfit text-xs font-semibold ml-2 select-none uppercase tracking-wider hidden lg:inline-block">
      {{ muted ? "Muted" : "Sound" }}
    </span>
  </button>
</template>
