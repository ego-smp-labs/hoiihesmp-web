<script setup lang="ts">
import { ref, computed } from 'vue'
import { customWeapons } from '../data/wikiData'
import { getItemDisplayName } from '../data/pixelMap'
import PixelIcon from './PixelIcon.vue'
import MinecraftText from './MinecraftText.vue'
import CraftingGrid from './CraftingGrid.vue'
import { playClickSound } from '../utils/audio'

const searchTerm = ref("")
const selectedMobileItem = ref<string | null>(null) // Mobile details Drawer

const handleSelectItem = (tooltipText: string) => {
  selectedMobileItem.value = tooltipText
}

// Search and filter computed values
const filteredWeapons = computed(() => {
  const term = searchTerm.value.toLowerCase()
  return customWeapons.filter(w =>
    w.name.toLowerCase().includes(term) ||
    w.enName.toLowerCase().includes(term) ||
    w.desc.toLowerCase().includes(term) ||
    w.tooltip.toLowerCase().includes(term)
  )
})
</script>

<template>
  <div class="custom-weapons-container font-sans text-[#e0d7ec] bg-grid-pattern relative pb-16">
    
    <!-- Centered Detail Modal -->
    <Teleport to="body">
      <div 
        v-if="selectedMobileItem" 
        class="fixed inset-0 bg-black/85 z-[200] flex items-center justify-center p-4 sm:p-6" 
        @click="selectedMobileItem = null"
      >
        <div 
          class="w-full max-w-md bg-[#1c1226] border-2 border-[#ff55ff] p-5 sm:p-6 rounded-none max-h-[80vh] overflow-y-auto shadow-[0_0_50px_rgba(255,85,255,0.2)] animate-modal-in"
          @click.stop
        >
          <div class="flex justify-between items-center mb-4 border-b border-[#4a3b5c]/30 pb-3">
            <span class="text-xs uppercase font-extrabold tracking-wider text-[#ff55ff] font-outfit">Chi Tiết Vật Phẩm</span>
            <button @click="selectedMobileItem = null" class="w-8 h-8 flex items-center justify-center text-sm text-[#7b6299] hover:text-white hover:bg-white/10 transition-colors font-bold rounded-none">✕</button>
          </div>
          
          <div class="font-vt text-lg sm:text-xl text-[#aaaaaa] bg-[#0f0a14] border-2 border-[#4a3b5c] p-4 rounded-none shadow-inner leading-relaxed">
            <MinecraftText :text="selectedMobileItem" />
          </div>
          
          <button 
            @click="selectedMobileItem = null"
            class="mt-5 w-full py-3 bg-[#ff55ff]/15 hover:bg-[#ff55ff]/25 border-2 border-[#ff55ff] rounded-none text-white font-outfit font-black uppercase tracking-wider text-xs transition-all active:scale-[0.98]"
          >
            Đóng
          </button>
        </div>
      </div>
    </Teleport>

    <!-- Search & Title Header -->
    <div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b-2 border-[#4a3b5c] mb-8">
      <div class="flex items-center gap-3">
        <span class="text-3xl animate-pulse">⚔</span>
        <div>
          <h2 class="font-outfit font-black text-2xl lg:text-3xl text-white tracking-tight uppercase">
            Vũ Khí Custom Khác
          </h2>
          <p class="text-xs text-[#7b6299] tracking-wider uppercase mt-1">
            Bản đồ công thức rèn đúc thần binh phụ trợ
          </p>
        </div>
      </div>

      <!-- Search Box -->
      <div class="relative w-full md:w-80">
        <input
          type="text"
          class="w-full bg-[#120b1a] border-2 border-[#4a3b5c] rounded-none px-4 py-2.5 text-sm text-white placeholder-[#7b6299] focus:outline-none focus:border-[#ff55ff] focus:ring-1 focus:ring-[#ff55ff] transition-all font-outfit"
          placeholder="Tìm kiếm kiếm, rìu, trượng..."
          v-model="searchTerm"
        />
        <button 
          v-if="searchTerm"
          @click="searchTerm = ''"
          class="absolute right-3 top-3 text-[#7b6299] hover:text-[#ff55ff] text-xs font-bold"
        >
          ✕
        </button>
      </div>
    </div>

    <!-- Weapons list -->
    <div class="flex flex-col gap-8">
      <div v-if="filteredWeapons.length === 0" class="mc-dark-panel p-12 text-center text-[#7b6299] italic">
        Không tìm thấy vũ khí nào khớp với từ khóa của bạn.
      </div>
      
      <div
        v-for="w in filteredWeapons"
        :key="w.id"
        class="flex flex-col xl:flex-row gap-6 p-6 mc-dark-panel border-l-8 transition-all hover:scale-[1.002]"
        :class="w.colorClass"
      >
        <!-- Info left side -->
        <div class="flex-1 flex flex-col gap-4">
          <div class="flex flex-wrap items-center gap-3">
            <span class="text-3xl animate-pulse">{{ w.badge }}</span>
            <div>
              <h3 class="text-xl lg:text-2xl font-black font-outfit text-white">
                {{ w.name }}
              </h3>
              <span class="text-xs font-semibold text-[#b7a9ca] font-outfit block">
                English: {{ w.enName }}
              </span>
            </div>
            <span class="ml-auto text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border bg-[#7209b7]/15 border-[#7209b7]/30 text-[#b23cd9]">
              Custom Weapon
            </span>
          </div>

          <p class="text-sm text-[#b7a9ca] leading-relaxed italic border-l-2 border-[#4a3b5c] pl-3">
            &ldquo;{{ w.desc }}&rdquo;
          </p>

          <!-- Lore Tooltip Box -->
          <div class="mc-dark-panel-inset p-4 font-vt text-[1.15rem] leading-relaxed glow-purple-pulse relative">
            <div class="absolute top-1 right-2 text-[9px] text-[#7b6299] uppercase select-none font-sans font-semibold">
              Lore Tooltip
            </div>
            <div class="absolute top-1 left-2 text-[9px] text-[#ff55ff]/70 font-sans uppercase">
              Chạm vào bất kỳ slot nguyên liệu nào để xem chi tiết
            </div>
            <div class="cursor-pointer" @click="handleSelectItem(w.tooltip)">
              <MinecraftText :text="w.tooltip" />
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-4 mt-auto pt-2">
            <span class="font-vt text-xs text-[#9d85c1] bg-[#120b1a] border border-[#4a3b5c] px-3 py-1.5 rounded-sm">
              Custom Model Data: {{ w.cmd }}
            </span>
          </div>
        </div>

        <!-- Recipe right side -->
        <div class="xl:w-80 flex flex-col items-center justify-center border-t xl:border-t-0 xl:border-l border-[#4a3b5c] pt-6 xl:pt-0 xl:pl-6 gap-3">
          <h4 class="text-xs uppercase font-extrabold text-[#7b6299] tracking-wider select-none">
            Lodestone Crafting Grid
          </h4>
          
          <CraftingGrid
            :recipe="w.recipe"
            :resultName="w.name"
            :resultId="w.id"
            :resultTooltip="w.tooltip"
            @select-item="handleSelectItem"
          />

          <span class="text-[9px] text-[#7b6299] text-center max-w-[240px] italic">
            * Nhấp vào các slot trong bảng để xem tên nguyên liệu.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.25s ease-out forwards;
}
</style>
