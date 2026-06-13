<script setup lang="ts">
import { ref, computed, watch } from 'vue'
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

const debouncedSearchTerm = ref("")
let searchTimeout: ReturnType<typeof setTimeout>

watch(searchTerm, (newVal) => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    debouncedSearchTerm.value = newVal
  }, 150)
})

// Pre-compute lowercase index
const searchableWeapons = customWeapons.map(w => ({
  ...w,
  _searchIndex: `${w.name} ${w.enName} ${w.desc} ${w.tooltip}`.toLowerCase()
}))

// Search and filter computed values
const filteredWeapons = computed(() => {
  const term = debouncedSearchTerm.value.toLowerCase()
  if (!term) return customWeapons
  return searchableWeapons.filter(w => w._searchIndex.includes(term))
})
</script>

<template>
  <div class="custom-weapons-container font-sans text-[#e0d7ec] relative pb-16 min-h-screen">
    
    <!-- Centered Detail Modal -->
    <Teleport to="body">
      <div 
        v-if="selectedMobileItem" 
        class="fixed inset-0 bg-black/60 backdrop-blur-md z-[200] flex items-center justify-center p-4 sm:p-6 transition-all duration-300" 
        @click="selectedMobileItem = null"
      >
        <div 
          class="w-full max-w-md bg-[#120b1a] border border-white/10 p-6 rounded-2xl shadow-2xl max-h-[85vh] overflow-y-auto transform scale-100 animate-modal-in"
          @click.stop
        >
          <div class="flex justify-between items-center mb-5 border-b border-white/5 pb-4">
            <span class="text-xs uppercase font-extrabold tracking-wider text-white/90 font-outfit">Thông Tin Vật Phẩm</span>
            <button @click="selectedMobileItem = null; playClickSound()" class="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors font-bold outline-none">✕</button>
          </div>
          
          <div class="font-vt text-lg sm:text-xl text-[#aaaaaa] bg-[#0c0712] border border-white/5 p-4 rounded-xl shadow-inner leading-relaxed">
            <MinecraftText :text="selectedMobileItem" />
          </div>
          
          <button 
            @click="selectedMobileItem = null; playClickSound()"
            class="mt-6 w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-outfit font-black uppercase tracking-wider text-xs transition-all active:scale-[0.98] outline-none"
          >
            Đóng Chi Tiết
          </button>
        </div>
      </div>
    </Teleport>

    <!-- Search & Title Header -->
    <div class="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 mb-8 pt-4">
      <div class="flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-6">
        <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-sm animate-float">
          ⚔
        </div>
        <div>
          <h2 class="font-outfit font-black text-2xl lg:text-3xl text-white tracking-tight uppercase">
            Vũ Khí Custom Khác
          </h2>
          <p class="text-xs sm:text-sm text-[#b7a9ca] tracking-wide uppercase mt-2 font-medium">
            Bản đồ công thức rèn đúc thần binh phụ trợ
          </p>
        </div>
      </div>

      <!-- Search Box -->
      <div class="relative w-full lg:w-80">
        <input
          type="text"
          class="w-full bg-[#120b1a] border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all font-sans shadow-sm"
          placeholder="Tìm kiếm kiếm, rìu, trượng..."
          v-model="searchTerm"
        />
        <button 
          v-if="searchTerm"
          @click="searchTerm = ''; playClickSound()"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>
    </div>

    <!-- Weapons list -->
    <div class="flex flex-col gap-8">
      <div v-if="filteredWeapons.length === 0" class="p-12 text-center text-[#b7a9ca] font-medium bg-white/5 rounded-3xl border border-white/5">
        Không tìm thấy vũ khí nào khớp với từ khóa của bạn.
      </div>
      
      <div
        v-for="w in filteredWeapons"
        :key="w.id"
        class="flex flex-col xl:flex-row gap-8 p-6 sm:p-8 bg-[#120b1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl transition-all hover:border-white/20 hover:shadow-xl group"
      >
        <!-- Info left side -->
        <div class="flex-1 flex flex-col gap-5">
          <div class="flex flex-wrap items-center gap-4">
            <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300">
              {{ w.badge }}
            </div>
            <div class="flex-1">
              <h3 class="text-2xl lg:text-3xl font-black font-outfit text-white tracking-tight">
                {{ w.name }}
              </h3>
              <span class="text-[11px] font-semibold text-[#b7a9ca] font-outfit uppercase tracking-wider block mt-1">
                {{ w.enName }}
              </span>
            </div>
            <span class="text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-lg border bg-[#7209b7]/10 border-[#7209b7]/20 text-[#b23cd9]">
              Custom Weapon
            </span>
          </div>

          <p class="text-sm text-[#e0d7ec] leading-relaxed italic border-l-4 border-white/10 pl-4 py-1">
            &ldquo;{{ w.desc }}&rdquo;
          </p>

          <!-- Lore Tooltip Box -->
          <div class="bg-[#0c0712] border border-white/5 p-5 rounded-2xl font-vt text-[1.15rem] leading-relaxed relative hover:border-white/10 transition-colors">
            <div class="absolute top-3 right-4 text-[9px] text-[#b7a9ca] uppercase select-none font-sans font-bold tracking-wider">
              Lore Tooltip
            </div>
            <div class="absolute top-3 left-4 text-[9px] text-[#ff55ff]/70 font-sans uppercase font-bold">
              Chạm vào item để xem
            </div>
            <div class="cursor-pointer mt-4" @click="handleSelectItem(w.tooltip)">
              <MinecraftText :text="w.tooltip" />
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-4 mt-auto pt-4 border-t border-white/5">
            <span class="font-outfit text-[11px] font-bold text-[#b7a9ca] uppercase tracking-wider bg-white/5 px-4 py-2 rounded-lg">
              Data: {{ w.cmd }}
            </span>
          </div>
        </div>

        <!-- Recipe right side -->
        <div class="xl:w-[340px] flex flex-col items-center justify-center border-t xl:border-t-0 xl:border-l border-white/10 pt-8 xl:pt-0 xl:pl-8 gap-4">
          <h4 class="text-[11px] uppercase font-black text-[#b7a9ca] tracking-widest select-none bg-white/5 px-4 py-1.5 rounded-full">
            Lodestone Grid
          </h4>
          
          <div class="transform scale-95 sm:scale-100 hover:scale-[1.02] transition-transform duration-300">
            <CraftingGrid
              :recipe="w.recipe"
              :resultName="w.name"
              :resultId="w.id"
              :resultTooltip="w.tooltip"
              @select-item="handleSelectItem"
            />
          </div>

          <span class="text-[10px] text-[#7b6299] text-center max-w-[240px] font-medium leading-relaxed">
            Nhấp vào nguyên liệu trên bảng để hiển thị tên và chi tiết.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes modalIn {
  from { opacity: 0; transform: scale(0.95) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-modal-in {
  animation: modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
</style>
