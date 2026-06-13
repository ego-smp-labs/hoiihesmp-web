<script setup lang="ts">
import { ref, computed, watch } from 'vue'
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

const debouncedSearchTerm = ref("")
let searchTimeout: ReturnType<typeof setTimeout>

watch(searchTerm, (newVal) => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    debouncedSearchTerm.value = newVal
  }, 150)
})

// Pre-compute lowercase index
const searchableItems = vaneTriflesItems.map(item => ({
  ...item,
  _searchIndex: `${item.name} ${item.enName} ${item.desc} ${item.tooltip}`.toLowerCase()
}))

const filteredItems = computed(() => {
  const term = debouncedSearchTerm.value.toLowerCase()
  if (!term) return vaneTriflesItems
  return searchableItems.filter(item => item._searchIndex.includes(term))
})
</script>

<template>
  <div class="vane-trifles-container font-sans text-[#e0d7ec] relative pb-12">

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
            <span class="text-xs uppercase font-extrabold tracking-wider text-white/90 font-outfit">Chi Tiết Vật Phẩm</span>
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

    <!-- Search Box & Title Header -->
    <div class="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 mb-8 pt-4">
      <div class="flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-6">
        <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-sm animate-float">
          🌾
        </div>
        <div>
          <h3 class="font-outfit font-black text-2xl lg:text-3xl text-white tracking-tight uppercase">
            Vật Phẩm Vane Trifles
          </h3>
          <p class="text-xs sm:text-sm text-[#b7a9ca] tracking-wide uppercase mt-2 font-medium">
            Các công cụ tiện ích nâng cao chất lượng trải nghiệm sinh tồn (QoL)
          </p>
        </div>
      </div>

      <div class="relative w-full lg:w-80 shrink-0">
        <input
          type="text"
          class="w-full bg-[#120b1a] border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all font-sans shadow-sm"
          placeholder="Tìm kiếm vật phẩm QoL..."
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

    <!-- Empty State -->
    <div v-if="filteredItems.length === 0" class="p-12 text-center text-[#b7a9ca] font-medium bg-white/5 rounded-3xl border border-white/5">
      Không tìm thấy công cụ nào phù hợp với từ khóa của bạn.
    </div>

    <!-- Items List -->
    <div class="flex flex-col gap-8">
      <div
        v-for="item in filteredItems"
        :key="item.id"
        class="flex flex-col xl:flex-row gap-8 p-6 sm:p-8 bg-[#120b1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl transition-all hover:border-white/20 hover:shadow-xl group"
      >
        <!-- Info left side -->
        <div class="flex-1 flex flex-col gap-5">
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300 shrink-0">
              <PixelIcon :itemId="item.id" :size="36" :enchanted="false" />
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="text-xl sm:text-2xl font-black font-outfit text-white leading-tight">
                {{ item.name }}
              </h4>
              <span class="text-[11px] font-semibold text-[#b7a9ca] font-outfit uppercase tracking-wider block mt-1">
                {{ item.enName }}
              </span>
            </div>
          </div>

          <p class="text-sm text-[#e0d7ec] leading-relaxed italic border-l-4 border-white/10 pl-4 py-1">
            &ldquo;{{ item.desc }}&rdquo;
          </p>

          <!-- Lore Box Preview -->
          <div class="bg-[#0c0712] border border-white/5 p-5 rounded-2xl font-vt text-[1.15rem] leading-relaxed relative hover:border-white/10 transition-colors mt-auto" @click="handleSelectItem(item.tooltip)">
            <div class="absolute top-3 right-4 text-[9px] text-[#b7a9ca] uppercase select-none font-sans font-bold tracking-wider">
              Lore Tooltip
            </div>
            <div class="absolute top-3 left-4 text-[9px] text-[#ffaa00]/70 font-sans uppercase font-bold">
              Chạm vào item để xem
            </div>
            <div class="cursor-pointer mt-4">
              <MinecraftText :text="item.tooltip" />
            </div>
          </div>
        </div>

        <!-- Recipe right side -->
        <div class="xl:w-[320px] flex flex-col items-center justify-center border-t xl:border-t-0 xl:border-l border-white/10 pt-8 xl:pt-0 xl:pl-8 gap-4 shrink-0">
          <span class="text-[10px] uppercase font-black text-[#b7a9ca] tracking-widest select-none bg-white/5 px-4 py-1.5 rounded-full">Công Thức</span>
          <div class="transform scale-95 sm:scale-100 hover:scale-[1.02] transition-transform duration-300">
            <CraftingGrid
              :recipe="item.recipe"
              :resultName="item.name"
              :resultId="item.id"
              :resultTooltip="item.tooltip"
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
