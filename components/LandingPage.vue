<script setup lang="ts">
import { ref } from 'vue'
import PixelIcon from './PixelIcon.vue'
import ThreeDBlock from './ThreeDBlock.vue'
import AudioToggle from './AudioToggle.vue'
import { playChestSound } from '../utils/audio'

const cards = [
  {
    id: "mace",
    title: "Mace Độc Quyền",
    subtitle: "Lodestone Forge & 9 Thần Binh",
    desc: "Cẩm nang tra cứu chi tiết công thức lò rèn Lodestone, chỉ số sát thương, kỹ năng active và lời nguyền cân bằng cho các vũ khí Mace Exclusive.",
    link: "/wiki/mace-exclusive",
    itemId: "mace_void",
    badgeColor: "bg-[#ff55ff]/10 border-[#ff55ff]/30 text-[#ff55ff]",
    borderColor: "hover:border-[#ff55ff]/60"
  },
  {
    id: "custom",
    title: "Vũ Khí Độc Quyền",
    subtitle: "Cổ Vật Custom Khác",
    desc: "Nơi tổng hợp thông tin chế tạo các vũ khí custom độc nhất khác của máy chủ, tiêu biểu như Kiếm Cổ Nguyền Cursed Sword mang sức mạnh rải rác linh hồn.",
    link: "/wiki/custom-weapons",
    itemId: "cursed_sword",
    badgeColor: "bg-[#7209b7]/15 border-[#7209b7]/30 text-[#b23cd9]",
    borderColor: "hover:border-[#7209b7]/60"
  },
  {
    id: "guide",
    title: "Items Hội Hè & Hướng Dẫn",
    subtitle: "Học Cách Chơi Vane & ValhallaMMO",
    desc: "Tài liệu hướng dẫn chi tiết dành cho member về hệ thống chế tạo cổ điển của Vane và bảng ngọc kỹ năng nâng cấp trang bị của ValhallaMMO.",
    link: "/guide/",
    itemId: "enchanted_golden_apple",
    badgeColor: "bg-[#55ffff]/10 border-[#55ffff]/30 text-[#55ffff]",
    borderColor: "hover:border-[#55ffff]/60"
  }
]

const handleNav = (link: string) => {
  playChestSound()
  if (typeof window !== 'undefined') {
    window.location.href = link
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#100a16] text-[#e0d7ec] relative bg-grid-pattern pb-16 flex flex-col font-sans">
    
    <!-- Hero Glow Effects -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff55ff]/5 rounded-full blur-[120px] -z-10 animate-pulse" />
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#55ffff]/5 rounded-full blur-[120px] -z-10" />

    <!-- Navigation Header -->
    <header class="w-full bg-[#100a16]/40 backdrop-blur-md border-b border-[#4a3b5c]/30 py-4 px-6 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-3">
          <PixelIcon itemId="mace_void" :size="32" :enchanted="true" />
          <span class="font-outfit font-black text-lg lg:text-xl tracking-wider bg-gradient-to-r from-[#ff55ff] to-[#55ffff] bg-clip-text text-transparent">
            HỘI HÈ SMP WIKI
          </span>
        </div>

        <div class="flex items-center gap-4">
          <AudioToggle />
          <a
            href="/wiki/mace-exclusive"
            @click="playChestSound"
            class="px-4 py-2 rounded border-2 border-[#ff55ff]/50 bg-[#ff55ff]/10 hover:bg-[#ff55ff]/20 text-white font-outfit text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
          >
            Wiki chính
          </a>
        </div>
      </div>
    </header>

    <!-- Main Hero Body -->
    <main class="flex-1 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center py-12 lg:py-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Hero Text Left -->
        <div class="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff55ff]/10 border border-[#ff55ff]/30 text-xs font-semibold text-[#ff55ff] tracking-wide w-fit mx-auto lg:mx-0">
            🕹 Máy chủ Minecraft: Hội Hè SMP S4
          </div>
          
          <h1 class="font-outfit font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
            Cẩm Nang Cổ Vật<br />
            <span class="bg-gradient-to-r from-[#ff55ff] via-[#e0a6ff] to-[#55ffff] bg-clip-text text-transparent drop-shadow-md">
              Hội Hè SMP Wiki
            </span>
          </h1>
          
          <p class="text-[#b7a9ca] text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Hệ thống tài liệu hướng dẫn và tra cứu tính năng dành cho member cụm sinh tồn Hội Hè SMP. Khám phá các cổ vật chế tạo, kỹ năng rèn đúc và hệ thống plugins tùy biến.
          </p>

          <div class="flex flex-wrap gap-4 justify-center lg:justify-start mt-2">
            <a
              href="#sections"
              class="px-6 py-3 rounded-md border-3 border-[#ff55ff] bg-[#ff55ff]/10 hover:bg-[#ff55ff]/20 text-white font-outfit text-sm font-black uppercase tracking-wider transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-lg cursor-pointer"
            >
              Bắt Đầu Khám Phá ↓
            </a>
            <a
              href="/guide/"
              @click="playChestSound"
              class="px-6 py-3 rounded-md border-3 border-[#4a3b5c] bg-[#20182b] hover:bg-[#4a3b5c]/30 text-[#e0d7ec] font-outfit text-sm font-black uppercase tracking-wider transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Tài Liệu Hướng Dẫn
            </a>
          </div>
        </div>

        <!-- Hero Graphic Right (3D Cube) -->
        <div class="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[280px]">
          <div class="absolute w-72 h-72 rounded-full border-4 border-dashed border-[#ff55ff]/15 animate-spin -z-10" style="animation-duration: 25s" />
          <div class="absolute w-52 h-52 rounded-full border-2 border-dashed border-[#55ffff]/15 animate-spin -z-10" style="animation-duration: 12s; animation-direction: reverse;" />
          
          <div class="animate-bounce" style="animation-duration: 4s">
            <ThreeDBlock :size="120" />
          </div>

          <div class="mt-8 px-4 py-2 rounded bg-[#100010] border border-[#2e0066] text-center shadow-lg hover:scale-105 transition-all">
            <span class="font-vt text-sm tracking-widest text-[#ff55ff] uppercase block">Hội Hè Lodestone Forge</span>
            <span class="font-vt text-xs text-[#aaaaaa]">Độc quyền đúc vũ khí custom</span>
          </div>
        </div>

      </div>

      <!-- Feature Blocks Section -->
      <section id="sections" class="mt-24 pt-12 border-t border-[#4a3b5c]/30 scroll-mt-20">
        <h2 class="font-outfit font-black text-2xl lg:text-3xl text-white tracking-tight uppercase text-center mb-4">
          3 Chuyên Mục Tra Cứu Chính
        </h2>
        <p class="text-[#b7a9ca] text-sm text-center max-w-xl mx-auto mb-12">
          Lựa chọn một trong các chuyên mục dưới đây để bắt đầu tìm hiểu về cơ chế và tính năng của máy chủ.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="card in cards"
            :key="card.id"
            @click="handleNav(card.link)"
            class="mc-dark-panel p-6 flex flex-col gap-5 cursor-pointer hover:-translate-y-1 transition-all"
            :class="card.borderColor"
          >
            <!-- Badge & Icon -->
            <div class="flex items-center justify-between">
              <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border" :class="card.badgeColor">
                {{ card.subtitle }}
              </span>
              <PixelIcon :itemId="card.itemId" :size="48" :enchanted="true" />
            </div>

            <!-- Content -->
            <div class="flex-1 flex flex-col gap-2">
              <h3 class="font-outfit font-black text-xl text-white group-hover:text-[#ff55ff] transition-colors">
                {{ card.title }}
              </h3>
              <p class="text-xs text-[#b7a9ca] leading-relaxed">
                {{ card.desc }}
              </p>
            </div>

            <!-- Action button -->
            <div class="mt-4 pt-4 border-t border-[#4a3b5c]/30 flex items-center justify-between text-xs font-bold font-outfit uppercase tracking-wider text-[#ff55ff] hover:text-white">
              <span>Khám Phá Chi Tiết</span>
              <span>➔</span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="mt-auto pt-8 border-t border-[#4a3b5c]/20 text-center text-xs text-[#7b6299] font-outfit">
      <div class="max-w-7xl mx-auto px-6">
        <p>Hội Hè SMP Wiki © 2026. Phát triển cho cộng đồng người chơi.</p>
        <p class="mt-1 text-[10px] opacity-70">Sản phẩm không thuộc bản quyền Mojang Studios.</p>
      </div>
    </footer>

  </div>
</template>
