<script setup lang="ts">
import { ref, computed } from 'vue'
import { vaneTriflesItems } from '../data/wikiData'
import PixelIcon from './PixelIcon.vue'
import MinecraftText from './MinecraftText.vue'
import CraftingGrid from './CraftingGrid.vue'
import { playClickSound } from '../utils/audio'

const searchTerm = ref("")
const selectedMobileItem = ref<string | null>(null)

const handleSelectItem = (tooltipText: string) => {
  selectedMobileItem.value = tooltipText
}

const filteredItems = computed(() => {
  const term = searchTerm.value.toLowerCase()
  return vaneTriflesItems.filter(item =>
    item.name.toLowerCase().includes(term) ||
    item.enName.toLowerCase().includes(term) ||
    item.desc.toLowerCase().includes(term) ||
    item.tooltip.toLowerCase().includes(term)
  )
})
</script>

<template>
  <div class="vane-trifles-container font-sans text-[#e0d7ec] relative pb-12">

    <!-- Centered Detail Modal (not bottom drawer) -->
    <Teleport to="body">
      <div
        v-if="selectedMobileItem"
        class="fixed inset-0 bg-black/85 z-[200] flex items-center justify-center p-4 sm:p-6"
        @click="selectedMobileItem = null"
      >
        <div
          class="w-full max-w-md bg-[#1c1226] border-2 border-[#ffaa00] p-5 sm:p-6 rounded-none max-h-[80vh] overflow-y-auto shadow-[0_0_50px_rgba(255,170,0,0.2)] animate-modal-in"
          @click.stop
        >
          <div class="flex justify-between items-center mb-4 border-b border-[#4a3b5c]/30 pb-3">
            <span class="text-xs uppercase font-extrabold tracking-wider text-[#ffaa00] font-outfit">Chi Tiết Vật Phẩm</span>
            <button @click="selectedMobileItem = null" class="w-8 h-8 flex items-center justify-center text-sm text-[#7b6299] hover:text-white hover:bg-white/10 transition-colors font-bold rounded-none">✕</button>
          </div>

          <div class="font-vt text-lg sm:text-xl text-[#aaaaaa] bg-[#0f0a14] border-2 border-[#4a3b5c] p-4 rounded-none shadow-inner leading-relaxed">
            <MinecraftText :text="selectedMobileItem" />
          </div>

          <button
            @click="selectedMobileItem = null"
            class="mt-5 w-full py-3 bg-[#ffaa00]/15 hover:bg-[#ffaa00]/25 border-2 border-[#ffaa00] rounded-none text-white font-outfit font-black uppercase tracking-wider text-xs transition-all active:scale-[0.98]"
          >
            Đóng
          </button>
        </div>
      </div>
    </Teleport>

    <!-- Search Box & Title Header -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pb-4 border-b border-[#4a3b5c]/40 mb-6">
      <div>
        <h3 class="font-outfit font-black text-base sm:text-lg text-white uppercase tracking-wider">
          Danh Sách Vật Phẩm Vane Trifles
        </h3>
        <p class="text-[10px] sm:text-xs text-[#7b6299] mt-0.5">
          Các công cụ tiện ích nâng cao chất lượng trải nghiệm sinh tồn (QoL)
        </p>
      </div>

      <div class="relative w-full sm:w-72 shrink-0">
        <input
          type="text"
          class="w-full bg-[#120b1a] border-2 border-[#4a3b5c] rounded-none px-3 sm:px-4 py-2 text-xs text-white placeholder-[#7b6299] focus:outline-none focus:border-[#ffaa00] focus:ring-1 focus:ring-[#ffaa00] transition-all font-outfit"
          placeholder="Tìm kiếm vật phẩm QoL..."
          v-model="searchTerm"
        />
        <button
          v-if="searchTerm"
          @click="searchTerm = ''"
          class="absolute right-3 top-2 text-[#7b6299] hover:text-[#ffaa00] text-xs font-bold"
        >
          ✕
        </button>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredItems.length === 0" class="mc-dark-panel p-8 sm:p-10 text-center text-[#7b6299] italic text-sm">
      Không tìm thấy công cụ nào phù hợp với từ khóa của bạn.
    </div>

    <!-- Items Grid List -->
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
      <div
        v-for="item in filteredItems"
        :key="item.id"
        class="mc-dark-panel p-4 sm:p-5 flex flex-col gap-4 border-l-4 border-l-[#ffaa00]/80 hover:border-l-[#ffaa00] transition-all duration-300"
      >
        <!-- Top: Icon + Name + Description -->
        <div class="flex items-start gap-3">
          <PixelIcon :itemId="item.id" :size="36" :enchanted="false" class="shrink-0 mt-0.5" />
          <div class="flex-1 min-w-0">
            <h4 class="text-sm sm:text-base font-black font-outfit text-white leading-tight">
              {{ item.name }}
            </h4>
            <span class="text-[10px] sm:text-[11px] font-semibold text-[#b7a9ca] font-outfit block">
              {{ item.enName }}
            </span>
          </div>
        </div>

        <p class="text-[11px] sm:text-xs text-[#b7a9ca] leading-relaxed font-sans">
          {{ item.desc }}
        </p>

        <!-- Bottom: Lore + Recipe side by side on desktop, stacked on mobile -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <!-- Lore Box Preview -->
          <div class="flex-1 mc-dark-panel-inset p-3 font-vt text-[0.95rem] sm:text-[1.05rem] leading-relaxed relative cursor-pointer hover:bg-black/10 transition-colors min-w-0" @click="handleSelectItem(item.tooltip)">
            <div class="absolute top-1 right-2 text-[7px] sm:text-[8px] text-[#7b6299] uppercase select-none font-sans font-semibold">
              Click xem chi tiết
            </div>
            <MinecraftText :text="item.tooltip" />
          </div>

          <!-- Recipe column -->
          <div class="sm:w-32 flex flex-row sm:flex-col items-center justify-center gap-2 border-t sm:border-t-0 sm:border-l border-[#4a3b5c]/30 pt-3 sm:pt-0 sm:pl-3 shrink-0">
            <span class="text-[8px] sm:text-[9px] uppercase font-extrabold text-[#7b6299] tracking-wider select-none">Công Thức</span>
            <CraftingGrid
              :recipe="item.recipe"
              :resultName="item.name"
              :resultId="item.id"
              :resultTooltip="item.tooltip"
              :gridSize="28"
              @select-item="handleSelectItem"
            />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
