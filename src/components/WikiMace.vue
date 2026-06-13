<script lang="ts">
const maceTabs = [
  { id: 'weapons', label: '🔨 Búa Exclusive' },
  { id: 'spears', label: '🔱 Giáo Exclusive' },
  { id: 'cores', label: '💎 Lõi Ma Pháp' },
  { id: 'materials', label: '✨ Vật Liệu Lò Rèn' },
  { id: 'forge', label: '⚡ Lodestone Forge' },
  { id: 'guide', label: '📖 Hướng Dẫn' }
]
</script>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { maceWeapons, spearWeapons, cores, materials, forgeSteps, guideSections } from '../data/wikiData'
import { getItemDisplayName } from '../data/pixelMap'
import PixelIcon from './PixelIcon.vue'
import MinecraftText from './MinecraftText.vue'
import CraftingGrid from './CraftingGrid.vue'
import ThreeDModelViewer from './ThreeDModelViewer.vue'
import { playClickSound, playChestSound } from '../utils/audio'

const searchTerm = ref("")
const activeTab = ref("weapons") // weapons, cores, materials, forge, guide
const selectedMobileItem = ref<string | null>(null) // Mobile details Drawer
const activeCoreRecipe = ref<string | null>(null) // Core ID recipe view

const active3DModel = ref<string | null>(null)
const active3DName = ref<string>("")

const handleSelectItem = (tooltipText: string) => {
  selectedMobileItem.value = tooltipText
}

const open3DModal = (glbPath: string, name: string) => {
  playChestSound()
  active3DModel.value = glbPath
  active3DName.value = name
}

const close3DModal = () => {
  playClickSound()
  active3DModel.value = null
}

const toggleCoreRecipe = (coreId: string) => {
  playClickSound()
  activeCoreRecipe.value = activeCoreRecipe.value === coreId ? null : coreId
}

const switchTab = (tabId: string) => {
  playClickSound()
  activeTab.value = tabId
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
const searchableWeapons = maceWeapons.map(w => ({
  ...w,
  _searchIndex: `${w.name} ${w.enName} ${w.desc} ${w.tooltip}`.toLowerCase()
}))

const searchableSpears = spearWeapons.map(w => ({
  ...w,
  _searchIndex: `${w.name} ${w.enName} ${w.desc} ${w.tooltip}`.toLowerCase()
}))

const searchableCores = cores.map(c => ({
  ...c,
  _searchIndex: `${c.name} ${c.instability} ${c.method}`.toLowerCase()
}))

const searchableMaterials = materials.map(m => ({
  ...m,
  _searchIndex: `${m.name} ${m.desc} ${m.method}`.toLowerCase()
}))

// Search and filter computed values
const filteredWeapons = computed(() => {
  if (activeTab.value !== 'weapons') return []
  const term = debouncedSearchTerm.value.toLowerCase()
  if (!term) return maceWeapons
  return searchableWeapons.filter(w => w._searchIndex.includes(term))
})

const filteredSpears = computed(() => {
  if (activeTab.value !== 'spears') return []
  const term = debouncedSearchTerm.value.toLowerCase()
  if (!term) return spearWeapons
  return searchableSpears.filter(w => w._searchIndex.includes(term))
})

const filteredCores = computed(() => {
  if (activeTab.value !== 'cores') return []
  const term = debouncedSearchTerm.value.toLowerCase()
  if (!term) return cores
  return searchableCores.filter(c => c._searchIndex.includes(term))
})

const filteredMaterials = computed(() => {
  if (activeTab.value !== 'materials') return []
  const term = debouncedSearchTerm.value.toLowerCase()
  if (!term) return materials
  return searchableMaterials.filter(m => m._searchIndex.includes(term))
})
</script>

<template>
  <div class="wiki-mace-container font-sans text-[#e0d7ec] relative pb-16 min-h-screen">
    
    <!-- Modals -->
    <!-- Mobile Item Details Modal -->
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
            <button @click="selectedMobileItem = null" class="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors font-bold outline-none">✕</button>
          </div>
          
          <div class="font-vt text-lg sm:text-xl text-[#aaaaaa] bg-[#0c0712] border border-white/5 p-4 rounded-xl shadow-inner leading-relaxed">
            <MinecraftText :text="selectedMobileItem" />
          </div>
          
          <button 
            @click="selectedMobileItem = null"
            class="mt-6 w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-outfit font-black uppercase tracking-wider text-xs transition-all active:scale-[0.98] outline-none"
          >
            Đóng Chi Tiết
          </button>
        </div>
      </div>
    </Teleport>

    <!-- 3D Model Viewer Modal -->
    <Teleport to="body">
      <div 
        v-if="active3DModel" 
        class="fixed inset-0 bg-black/70 backdrop-blur-lg z-[200] flex items-center justify-center p-4 sm:p-6 transition-all duration-300" 
        @click="close3DModal"
      >
        <div 
          class="w-full max-w-3xl bg-[#0c0712] border border-white/10 p-5 sm:p-8 rounded-3xl shadow-[0_0_50px_rgba(255,85,255,0.15)] transform scale-100 animate-modal-in flex flex-col gap-5 relative overflow-hidden"
          @click.stop
        >
          <!-- Ambient glows -->
          <div class="absolute top-0 left-1/4 w-[300px] h-[300px] bg-[#ff55ff]/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
          <div class="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#55ffff]/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

          <div class="flex justify-between items-center z-10">
            <div class="flex flex-col">
              <span class="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#b7a9ca] font-outfit">Mô hình 3D</span>
              <h3 class="text-xl sm:text-2xl font-black font-outfit text-white uppercase mt-1">{{ active3DName }}</h3>
            </div>
            <button 
              @click="close3DModal" 
              class="w-10 h-10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors font-bold outline-none"
            >
              ✕
            </button>
          </div>
          
          <!-- Interactive 3D Viewer Container -->
          <div class="w-full h-[300px] sm:h-[400px] md:h-[450px] bg-[#120b1a]/50 border border-white/5 rounded-2xl flex items-center justify-center relative z-10 backdrop-blur-sm">
            <ThreeDModelViewer
              :src="active3DModel"
              :alt="active3DName"
              :autoRotate="false"
              :cameraControls="true"
              :shadowIntensity="2.0"
            />
          </div>
          
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4 mt-2 z-10">
            <span class="text-[10px] sm:text-[11px] text-[#b7a9ca] font-medium font-sans text-center sm:text-left bg-white/5 px-4 py-2 rounded-lg border border-white/5">
              💡 Chuột trái để xoay, lăn chuột để thu phóng
            </span>
            <button 
              @click="close3DModal"
              class="w-full sm:w-auto px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white font-outfit font-black uppercase tracking-wider text-xs transition-all active:scale-[0.98] cursor-pointer outline-none"
            >
              Đóng Mô Hình
            </button>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Header & Search -->
    <div class="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 mb-8 pt-4">
      <div class="flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-6">
        <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-sm animate-float">
          🔮
        </div>
        <div>
          <h2 class="font-outfit font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
            Mace Exclusive Wiki
          </h2>
          <p class="text-xs sm:text-sm text-[#b7a9ca] tracking-wide uppercase mt-2 font-medium">
            Tra cứu công thức rèn đúc và sức mạnh cổ vật
          </p>
        </div>
      </div>

      <!-- Search Box -->
      <div class="relative w-full lg:w-96">
        <input
          type="text"
          class="w-full bg-[#120b1a] border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all font-sans shadow-sm"
          placeholder="Tìm kiếm búa, lõi, nguyên liệu..."
          v-model="searchTerm"
        />
        <button 
          v-if="searchTerm"
          @click="searchTerm = ''"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>
    </div>

    <!-- Tabs Navigation -->
    <div class="flex flex-wrap gap-2 md:gap-3 mb-10">
      <button
        v-for="tab in maceTabs"
        :key="tab.id"
        @click="switchTab(tab.id)"
        class="flex-1 min-w-[140px] px-5 py-3.5 rounded-xl font-outfit font-bold text-[11px] sm:text-xs uppercase tracking-wider text-center transition-all cursor-pointer outline-none border"
        :class="activeTab === tab.id
          ? 'bg-white/10 border-white/20 text-white shadow-md'
          : 'bg-transparent border-white/5 text-[#b7a9ca] hover:bg-white/5 hover:text-white hover:border-white/10'
        "
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- ================= WEAPONS SECTION ================= -->
    <div v-if="activeTab === 'weapons'" class="flex flex-col gap-8">
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
            <span class="text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-lg border bg-[#ffaa00]/10 border-[#ffaa00]/20 text-[#ffaa00]">
              Mace Exclusive
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
            <button 
              v-if="w.id !== 'chronos' && w.id !== 'sonic' && w.id !== 'cursed_sword'"
              @click="open3DModal('/minecraft_mace__sapixcraft.glb', w.name)"
              class="px-5 py-2.5 border border-[#ff55ff]/30 bg-[#ff55ff]/10 hover:bg-[#ff55ff]/20 hover:border-[#ff55ff]/50 text-white font-outfit text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300 hover:-translate-y-0.5 outline-none flex items-center gap-2"
            >
              <span>🔮 Khám Phá 3D</span>
            </button>
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
              :resultId="`mace_${w.id}`"
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

    <!-- ================= SPEARS SECTION ================= -->
    <div v-if="activeTab === 'spears'" class="flex flex-col gap-8 animate-fade-in">
      <div v-if="filteredSpears.length === 0" class="p-12 text-center text-[#b7a9ca] font-medium bg-white/5 rounded-3xl border border-white/5">
        Không tìm thấy giáo nào khớp với từ khóa của bạn.
      </div>
      
      <div
        v-for="w in filteredSpears"
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
            <span class="text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-lg border bg-[#00b4d8]/10 border-[#00b4d8]/20 text-[#00b4d8]">
              Spear Exclusive
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
              :resultId="`spear_${w.id}`"
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

    <!-- ================= CORES SECTION ================= -->
    <div v-if="activeTab === 'cores'" class="flex flex-col gap-8">
      <div class="p-6 bg-[#ff5555]/5 border border-[#ff5555]/20 rounded-3xl flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div class="w-12 h-12 shrink-0 rounded-full bg-[#ff5555]/10 flex items-center justify-center text-xl text-[#ff5555]">⚠️</div>
        <div>
          <h3 class="font-outfit font-black text-sm text-[#ff5555] uppercase tracking-wider mb-2 text-center sm:text-left">
            Cơ chế phản phệ (Instability)
          </h3>
          <p class="text-xs sm:text-sm text-[#b7a9ca] leading-relaxed text-center sm:text-left">
            Chế tạo Lõi ma pháp gây sát thương ngẫu nhiên <strong>5-9 tim</strong> (bỏ qua giáp) và <strong>đóng băng 5s</strong>. Có <strong>30% tỷ lệ thất bại</strong> làm lõi vỡ thành Ruined Core và khóa chế tạo 15 phút.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div
          v-for="c in filteredCores"
          :key="c.id"
          class="bg-[#120b1a]/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col gap-6 hover:border-white/20 transition-all shadow-sm"
        >
          <div class="flex flex-col sm:flex-row items-center sm:items-start gap-5 border-b border-white/5 pb-5">
            <div class="p-3 bg-white/5 rounded-2xl border border-white/10 shrink-0">
              <PixelIcon :itemId="c.id" :size="48" :enchanted="c.id !== 'ruined_core'" />
            </div>
            <div class="text-center sm:text-left">
              <h3 class="font-outfit font-black text-xl sm:text-2xl text-white tracking-tight">
                {{ c.name }}
              </h3>
              <span class="font-vt text-[11px] sm:text-xs text-[#7b6299] tracking-widest block mt-1 uppercase">ID: {{ c.id }}</span>
            </div>
          </div>

          <div class="flex-1 flex flex-col gap-5 text-sm">
            <div class="bg-[#ff5555]/5 rounded-2xl p-5 border border-[#ff5555]/10">
              <span class="font-black text-[10px] sm:text-[11px] text-[#ff5555] uppercase tracking-widest block mb-2 font-outfit">
                ☠ Lời Nguyền Bất Ổn
              </span>
              <p class="text-[#e0d7ec] leading-relaxed text-xs sm:text-sm font-medium">
                {{ c.instability }}
              </p>
            </div>

            <div class="bg-white/5 rounded-2xl p-5 border border-white/5">
              <span class="font-black text-[10px] sm:text-[11px] text-[#55ffff] uppercase tracking-widest block mb-2 font-outfit">
                🛠 Phương Thức Thu Thập
              </span>
              <p class="text-[#e0d7ec] leading-relaxed text-xs sm:text-sm font-medium">
                {{ c.method }}
              </p>
            </div>

            <!-- Recipe Toggle -->
            <div v-if="c.recipe" class="mt-auto pt-2">
              <button
                @click="toggleCoreRecipe(c.id)"
                class="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-outfit font-black uppercase tracking-wider text-xs transition-all outline-none"
              >
                {{ activeCoreRecipe === c.id ? "✕ Đóng Công Thức" : "⚒ Xem Công Thức Bàn Chế Tạo" }}
              </button>

              <div v-if="activeCoreRecipe === c.id" class="mt-4 flex justify-center py-6 bg-[#0c0712] rounded-2xl border border-white/5 animate-fade-in">
                <CraftingGrid
                  :recipe="c.recipe"
                  :resultName="c.name"
                  :resultId="c.id"
                  :resultTooltip="`&f${c.name}|&7Lõi ma pháp chế tạo búa.`"
                  @select-item="handleSelectItem"
                  class="transform scale-90 sm:scale-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ================= MATERIALS SECTION ================= -->
    <div v-if="activeTab === 'materials'" class="flex flex-col gap-6 lg:gap-8">
      <div class="text-center max-w-2xl mx-auto mb-4">
        <p class="text-sm sm:text-base text-[#b7a9ca] leading-relaxed font-medium">
          Các nguyên liệu dị biệt cực hiếm thu được qua những nghi thức liều mạng đặc thù, phục vụ việc rèn vũ khí tối thượng:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div
          v-for="m in filteredMaterials"
          :key="m.id"
          class="bg-[#120b1a]/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col sm:flex-row gap-6 items-center sm:items-start hover:border-white/20 transition-all shadow-sm"
        >
          <div class="p-4 bg-white/5 rounded-2xl border border-white/10 shrink-0">
            <PixelIcon :itemId="m.id" :size="64" :enchanted="m.id === 'obsidian_chaos'" />
          </div>

          <div class="flex-1 flex flex-col gap-3 text-center sm:text-left w-full">
            <div>
              <h3 class="font-outfit font-black text-xl sm:text-2xl text-white tracking-tight">
                {{ m.name }}
              </h3>
              <span class="font-vt text-[11px] sm:text-xs text-[#7b6299] tracking-widest block mt-1 uppercase">
                ID: {{ m.id }}
              </span>
            </div>
            
            <p class="text-xs sm:text-sm text-[#b7a9ca] leading-relaxed italic">
              &ldquo;{{ m.desc }}&rdquo;
            </p>
            
            <div class="mt-2 p-4 bg-white/5 border border-white/5 rounded-2xl">
              <span class="text-[10px] uppercase font-black text-[#ffaa00] tracking-widest block mb-1.5 font-outfit">
                ☘ Thu thập
              </span>
              <span class="text-xs sm:text-sm text-[#e0d7ec] leading-relaxed block font-medium">
                {{ m.method }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ================= FORGE SECTION ================= -->
    <div v-if="activeTab === 'forge'" class="bg-[#120b1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-14 flex flex-col gap-10 shadow-2xl relative overflow-hidden">
      <!-- Glow -->
      <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div class="text-center max-w-3xl mx-auto">
        <h3 class="text-2xl sm:text-3xl lg:text-4xl font-black font-outfit text-white tracking-tight uppercase mb-4">
          Nghi Thức Lò Rèn Lodestone
        </h3>
        <p class="text-sm sm:text-base leading-relaxed text-[#b7a9ca] font-medium">
          Do năng lượng khổng lồ, vũ khí cổ vật Mace yêu cầu quá trình khởi động **Lodestone Forge** theo 5 bước chuyển dịch không gian:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8 mt-4 relative z-10">
        <!-- Connecting Line -->
        <div class="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-white/10 -z-10"></div>

        <div
          v-for="(step, idx) in forgeSteps"
          :key="idx"
          class="bg-[#0c0712]/90 backdrop-blur-md p-6 rounded-3xl flex flex-col items-center gap-4 text-center border border-white/5 hover:border-white/20 hover:-translate-y-2 transition-all duration-300 group shadow-lg"
        >
          <div class="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl text-white group-hover:bg-white/10 transition-colors duration-300">
            {{ step.icon }}
          </div>
          
          <div class="mt-2">
            <span class="text-[10px] sm:text-[11px] font-black text-white/50 uppercase tracking-widest block font-outfit mb-1">Bước {{ step.step }}</span>
            <h4 class="text-sm sm:text-base font-black text-white leading-tight">{{ step.title }}</h4>
          </div>
          
          <p class="text-[11px] sm:text-xs text-[#b7a9ca] leading-relaxed font-medium mt-1">
            {{ step.desc }}
          </p>
        </div>
      </div>

      <div class="mt-4 bg-[#ff5555]/10 border border-[#ff5555]/20 p-5 sm:p-6 rounded-2xl text-xs sm:text-sm text-[#ff5555] leading-relaxed flex items-start gap-4">
        <span class="text-2xl">⚠️</span>
        <div>
          <strong class="font-outfit uppercase tracking-wider block mb-1">Chấn động ma lực phản phệ</strong>
          Khi kích hoạt, lò rèn ma thuật sẽ phát nổ, gây sát thương trực tiếp từ <strong>5 đến 9 tim</strong> (bỏ qua giáp) cho người rèn. Khuyến cáo chuẩn bị táo vàng hoặc đồ buff đầy đủ.
        </div>
      </div>
    </div>

    <!-- ================= GUIDE SECTION ================= -->
    <div v-if="activeTab === 'guide'" class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      <div
        v-for="sect in guideSections"
        :key="sect.id"
        class="bg-[#120b1a]/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col gap-4 hover:border-white/20 transition-all shadow-sm"
      >
        <div class="flex items-center gap-4 border-b border-white/5 pb-4 mb-2">
          <div class="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl">
            📖
          </div>
          <h3 class="font-outfit font-black text-lg sm:text-xl text-white tracking-tight">
            {{ sect.title }}
          </h3>
        </div>
        
        <p class="text-sm text-[#b7a9ca] leading-relaxed whitespace-pre-wrap font-medium">
          {{ sect.content }}
        </p>
      </div>
    </div>

  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.animate-fade-in {
  animation: fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes modalIn {
  from { opacity: 0; transform: scale(0.95) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-modal-in {
  animation: modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
</style>
