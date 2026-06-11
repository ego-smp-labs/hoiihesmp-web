<script setup lang="ts">
import { ref, computed } from 'vue'
import { maceWeapons, cores, materials, forgeSteps, guideSections } from '../data/wikiData'
import { getItemDisplayName } from '../data/pixelMap'
import PixelIcon from './PixelIcon.vue'
import MinecraftText from './MinecraftText.vue'
import CraftingGrid from './CraftingGrid.vue'
import { playClickSound, playChestSound } from '../utils/audio'

const searchTerm = ref("")
const activeTab = ref("weapons") // weapons, cores, materials, forge, guide
const selectedMobileItem = ref<string | null>(null) // Mobile details Drawer
const activeCoreRecipe = ref<string | null>(null) // Core ID recipe view

const handleSelectItem = (tooltipText: string) => {
  selectedMobileItem.value = tooltipText
}

const toggleCoreRecipe = (coreId: string) => {
  playClickSound()
  activeCoreRecipe.value = activeCoreRecipe.value === coreId ? null : coreId
}

const switchTab = (tabId: string) => {
  playClickSound()
  activeTab.value = tabId
}

// Search and filter computed values
const filteredWeapons = computed(() => {
  const term = searchTerm.value.toLowerCase()
  return maceWeapons.filter(w =>
    w.name.toLowerCase().includes(term) ||
    w.enName.toLowerCase().includes(term) ||
    w.desc.toLowerCase().includes(term) ||
    w.tooltip.toLowerCase().includes(term)
  )
})

const filteredCores = computed(() => {
  const term = searchTerm.value.toLowerCase()
  return cores.filter(c =>
    c.name.toLowerCase().includes(term) ||
    c.instability.toLowerCase().includes(term) ||
    c.method.toLowerCase().includes(term)
  )
})

const filteredMaterials = computed(() => {
  const term = searchTerm.value.toLowerCase()
  return materials.filter(m =>
    m.name.toLowerCase().includes(term) ||
    m.desc.toLowerCase().includes(term) ||
    m.method.toLowerCase().includes(term)
  )
})
</script>

<template>
  <div class="wiki-mace-container font-sans text-[#e0d7ec] bg-grid-pattern relative pb-16">
    
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
        <span class="text-3xl animate-pulse">🔮</span>
        <div>
          <h2 class="font-outfit font-black text-2xl lg:text-3xl text-white tracking-tight uppercase">
            Mace Exclusive Wiki
          </h2>
          <p class="text-xs text-[#7b6299] tracking-wider uppercase mt-1">
            Bản đồ công thức, ma pháp búa và lõi cổ vật
          </p>
        </div>
      </div>

      <!-- Search Box -->
      <div class="relative w-full md:w-80">
        <input
          type="text"
          class="w-full bg-[#120b1a] border-2 border-[#4a3b5c] rounded-none px-4 py-2.5 text-sm text-white placeholder-[#7b6299] focus:outline-none focus:border-[#ff55ff] focus:ring-1 focus:ring-[#ff55ff] transition-all font-outfit"
          placeholder="Tìm kiếm búa, lõi, nguyên liệu..."
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

    <!-- Tabs Navigation -->
    <div class="flex flex-wrap gap-2 md:gap-3 mb-8">
      <button
        v-for="tab in [
          { id: 'weapons', label: '⚔ Búa & Giáo Exclusive' },
          { id: 'cores', label: '💎 Lõi Ma Pháp' },
          { id: 'materials', label: '✨ Vật Liệu Lò Rèn' },
          { id: 'forge', label: '⚡ Lodestone Forge' },
          { id: 'guide', label: '📖 Hướng Dẫn' }
        ]"
        :key="tab.id"
        @click="switchTab(tab.id)"
        class="flex-1 min-w-[150px] px-4 py-3 border-3 font-outfit font-extrabold text-xs uppercase tracking-wider text-center transition-all cursor-pointer"
        :class="activeTab === tab.id
          ? 'bg-[#ff55ff]/15 border-[#ff55ff] text-[#ff55ff] shadow-[0_0_12px_rgba(255,85,255,0.15)]'
          : 'bg-[#20182b] border-[#4a3b5c] text-[#e0d7ec] hover:bg-[#4a3b5c]/20 hover:-translate-y-0.5'
        "
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- ================= WEAPONS SECTION ================= -->
    <div v-if="activeTab === 'weapons'" class="flex flex-col gap-8">
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
            <span class="ml-auto text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border bg-[#ffaa00]/10 border-[#ffaa00]/30 text-[#ffaa00]">
              Mace Exclusive
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
            :resultId="`mace_${w.id}`"
            :resultTooltip="w.tooltip"
            @select-item="handleSelectItem"
          />

          <span class="text-[9px] text-[#7b6299] text-center max-w-[240px] italic">
            * Nhấp vào các slot trong bảng để xem tên nguyên liệu.
          </span>
        </div>
      </div>
    </div>

    <!-- ================= CORES SECTION ================= -->
    <div v-if="activeTab === 'cores'" class="flex flex-col gap-6">
      <div class="mc-dark-panel p-5 bg-[#ff5555]/5 border-l-6 border-[#ff5555]/50 rounded-lg">
        <h3 class="font-outfit font-bold text-sm text-[#ff5555] uppercase tracking-wide mb-1">
          ⚠️ Cơ chế phản phệ ma pháp (Core Crafting)
        </h3>
        <p class="text-xs text-[#b7a9ca] leading-relaxed">
          Khi thực hiện chế tạo bất kỳ Lõi ma pháp nào tại Bàn chế tạo, người chơi sẽ chịu sát thương phản phệ ngẫu nhiên từ <strong>5 đến 9 tim</strong> (10 - 18 HP), đồng thời bị <strong>đóng băng bất động trong 5 giây</strong>. Nghi thức chế tạo có <strong>30% cơ hội thất bại</strong>, làm lõi vỡ thành <strong>Ruined Core</strong> và khóa chế tạo core trong 15 phút.
        </p>
      </div>

      <div v-if="filteredCores.length === 0" class="mc-dark-panel p-12 text-center text-[#7b6299] italic">
        Không tìm thấy lõi ma pháp nào khớp với từ khóa của bạn.
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="c in filteredCores"
          :key="c.id"
          class="mc-dark-panel p-6 flex flex-col gap-4 hover:border-[#ff55ff]/40 transition-all"
        >
          <div class="flex items-center gap-3 border-b border-[#4a3b5c] pb-3">
            <PixelIcon :itemId="c.id" :size="40" :enchanted="c.id !== 'ruined_core'" />
            <div>
              <h3 class="font-outfit font-black text-lg text-white">
                {{ c.name }}
              </h3>
              <span class="font-vt text-xs text-[#7b6299]">ID: {{ c.id }}</span>
            </div>
          </div>

          <div class="flex-1 flex flex-col gap-4 text-xs">
            <div>
              <span class="font-bold text-[#ff5555] uppercase tracking-wider block mb-1">
                ☠ Sự Bất Ổn (Instability Curse)
              </span>
              <p class="text-[#b7a9ca] leading-relaxed bg-[#140e18]/40 p-2.5 border border-[#4a3b5c]/30 rounded">
                {{ c.instability }}
              </p>
            </div>

            <div>
              <span class="font-bold text-[#55ffff] uppercase tracking-wider block mb-1">
                🛠 Phương thức sở hữu
              </span>
              <p class="text-[#e0d7ec] leading-relaxed">
                {{ c.method }}
              </p>
            </div>

            <!-- Display Recipe Option if present -->
            <div v-if="c.recipe" class="mt-2 pt-3 border-t border-[#4a3b5c]/40">
              <button
                @click="toggleCoreRecipe(c.id)"
                class="text-[#ff55ff] hover:text-white font-outfit font-bold flex items-center gap-1.5 transition-colors uppercase tracking-wider text-[10px] cursor-pointer"
              >
                {{ activeCoreRecipe === c.id ? "✕ Ẩn Công Thức Rèn" : "⚒ Xem Công Thức Bàn Chế Tạo" }}
              </button>

              <div v-if="activeCoreRecipe === c.id" class="mt-4 flex justify-center py-4 bg-[#120b1a] rounded border border-[#4a3b5c] animate-fade-in">
                <CraftingGrid
                  :recipe="c.recipe"
                  :resultName="c.name"
                  :resultId="c.id"
                  :resultTooltip="`&f${c.name}|&7Lõi ma pháp chế tạo búa.`"
                  @select-item="handleSelectItem"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ================= MATERIALS SECTION ================= -->
    <div v-if="activeTab === 'materials'" class="flex flex-col gap-6">
      <p class="text-sm text-[#b7a9ca] leading-relaxed">
        Các nguyên liệu dị biệt cực hiếm, thu được qua những nghi thức liều mạng đặc thù phục vụ việc chế tạo lõi và vũ khí tối thượng:
      </p>

      <div v-if="filteredMaterials.length === 0" class="mc-dark-panel p-12 text-center text-[#7b6299] italic">
        Không tìm thấy vật liệu nào khớp với từ khóa của bạn.
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="m in filteredMaterials"
          :key="m.id"
          class="mc-dark-panel p-6 flex flex-row gap-5 items-start hover:border-[#55ffff]/40 transition-all"
        >
          <!-- CDN Pixel Icon Visualizer -->
          <div class="mc-dark-panel-inset p-3 rounded-md flex items-center justify-center shrink-0">
            <PixelIcon :itemId="m.id" :size="56" :enchanted="m.id === 'obsidian_chaos'" />
          </div>

          <div class="flex-1 flex flex-col gap-2">
            <h3 class="font-outfit font-black text-lg text-white">
              {{ m.name }}
            </h3>
            <span class="font-vt text-xs text-[#7b6299]">
              ID: {{ m.id }} | CMD: {{ m.cmd }}
            </span>
            <p class="text-xs text-[#b7a9ca] leading-relaxed italic">
              &ldquo;{{ m.desc }}&rdquo;
            </p>
            
            <div class="mt-2 p-2.5 bg-[#120b1a] border border-[#4a3b5c] rounded">
              <span class="text-[10px] uppercase font-bold text-[#ffaa00] tracking-wider block mb-1">
                ☘ Nghi thức thu thập:
              </span>
              <span class="text-xs text-[#e0d7ec] leading-relaxed block">
                {{ m.method }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ================= FORGE SECTION ================= -->
    <div v-if="activeTab === 'forge'" class="mc-dark-panel p-6 lg:p-8 flex flex-col gap-6 shadow-xl">
      <h3 class="text-xl lg:text-2xl font-black font-outfit text-white border-b border-[#4a3b5c] pb-3">
        ⚡ Nghi thức Lò Rèn Nhiệt Hạch Lodestone
      </h3>
      
      <p class="text-sm leading-relaxed text-[#b7a9ca]">
        Bởi năng lượng khổng lồ tích tụ bên trong, các vũ khí cổ vật Mace không thể đúc bằng bàn chế tạo thông thường. Người chơi cần khởi động **Lodestone Forge** theo 5 bước chuyển dịch không gian:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mt-4 relative">
        <div class="hidden md:block absolute top-10 left-12 right-12 h-1 bg-[#4a3b5c] -z-10" />

        <div
          v-for="(step, idx) in forgeSteps"
          :key="idx"
          class="mc-dark-panel-inset p-4 rounded-xl flex flex-col items-center gap-3 text-center border-2 hover:border-[#ff55ff]/40 transition-all group"
        >
          <div class="w-14 h-14 rounded-full bg-[#241c30] border-3 border-[#4a3b5c] flex items-center justify-center text-2xl font-bold text-[#ff55ff] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,0,0,0.4)]">
            {{ step.icon }}
          </div>
          
          <div>
            <span class="text-[10px] font-bold text-[#ffaa00] uppercase tracking-wider block">Giai đoạn {{ step.step }}</span>
            <h4 class="text-sm font-bold text-white mt-0.5">{{ step.title }}</h4>
          </div>
          
          <p class="text-xs text-[#b7a9ca] leading-relaxed mt-1">
            {{ step.desc }}
          </p>
        </div>
      </div>

      <div class="mt-4 bg-[#ff5555]/10 border-l-4 border-[#ff5555] p-4 rounded text-xs lg:text-sm text-[#ff5555] leading-relaxed">
        <strong>⚠️ Chấn động phản phệ:</strong> Khi kích hoạt, lò rèn ma thuật sẽ phát nổ, gây sát thương trực tiếp từ <strong>5 đến 9 tim</strong> (10 - 18 HP) bỏ qua giáp cho người rèn đứng gần. Hãy chuẩn bị các biện pháp phòng vệ sức khỏe đầy đủ.
      </div>
    </div>

    <!-- ================= GUIDE SECTION ================= -->
    <div v-if="activeTab === 'guide'" class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="sect in guideSections"
        :key="sect.id"
        class="mc-dark-panel p-6 flex flex-col gap-3 hover:border-[#e29578]/50 transition-all"
      >
        <div class="flex items-center gap-2 border-b border-[#4a3b5c] pb-3 mb-2">
          <span class="text-xl">📖</span>
          <h3 class="font-outfit font-black text-base lg:text-lg text-white">
            {{ sect.title }}
          </h3>
        </div>
        
        <p class="text-xs lg:text-sm text-[#b7a9ca] leading-relaxed whitespace-pre-wrap">
          {{ sect.content }}
        </p>
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
