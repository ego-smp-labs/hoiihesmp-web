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
  <div class="min-h-screen bg-transparent text-[#e0d7ec] relative bg-grid-pattern pb-16 flex flex-col font-sans">

    <!-- Hero Glow Effects -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff55ff]/5 rounded-full blur-[120px] -z-10 animate-pulse" />
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#55ffff]/5 rounded-full blur-[120px] -z-10" />

    <!-- Navigation Header -->
    <header class="w-full bg-[#100a16]/60 backdrop-blur-md border-b border-[#4a3b5c]/30 py-3 px-4 sm:px-6 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" class="flex items-center gap-2 sm:gap-3 shrink-0">
          <img src="/server-icon.png" alt="Hội Hè SMP" class="w-8 h-8 sm:w-10 sm:h-10 rounded-none pixelated" />
          <span class="font-outfit font-black text-sm sm:text-lg tracking-wider bg-gradient-to-r from-[#ff55ff] to-[#55ffff] bg-clip-text text-transparent whitespace-nowrap">
            HỘI HÈ SMP
          </span>
        </a>

        <div class="flex items-center gap-1.5 sm:gap-3">
          <AudioToggle />
          <a
            href="/support"
            @click="playChestSound"
            class="hidden lg:inline-flex px-3 py-2 rounded-none border border-[#55ffff]/30 bg-[#55ffff]/5 hover:bg-[#55ffff]/10 text-[#55ffff] font-outfit text-[10px] font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
          >
            Hỗ Trợ
          </a>
          <a
            href="https://discord.gg/As4h3xMDnR"
            target="_blank"
            @click="playChestSound"
            class="px-2.5 sm:px-3.5 py-2 rounded-none border-2 border-[#5865F2] bg-[#5865F2]/20 hover:bg-[#5865F2]/45 text-white font-outfit text-[10px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 shadow-[0_0_12px_rgba(88,101,242,0.25)] hover:shadow-[0_0_20px_rgba(88,101,242,0.5)] hover:scale-105 active:scale-95"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 127.14 96.36">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.4-5c.9-.65,1.76-1.35,2.58-2.07a75.48,75.48,0,0,0,75.68,0c.82.72,1.68,1.42,2.58,2.07a68.43,68.43,0,0,1-10.4,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129.07,50.12,122.9,27.35,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
            </svg>
            <span class="hidden sm:inline">Discord</span>
          </a>
          <a
            href="/wiki/mace-exclusive"
            @click="playChestSound"
            class="hidden sm:inline-flex px-3 py-2 rounded-none border-2 border-[#ff55ff]/50 bg-[#ff55ff]/10 hover:bg-[#ff55ff]/20 text-white font-outfit text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Wiki
          </a>
        </div>
      </div>
    </header>

    <!-- Main Hero Body -->
    <main class="flex-1 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col justify-center py-8 sm:py-12 lg:py-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        <!-- Hero Text Left -->
        <div class="lg:col-span-7 flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
          <div class="hero-title-animated inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-[#ff55ff]/15 border-l-4 border-l-[#ff55ff] border-y border-r border-[#ff55ff]/30 text-[10px] sm:text-xs font-bold text-[#ff55ff] tracking-wide w-fit mx-auto lg:mx-0">
            🕹️ Máy chủ Minecraft: Hội Hè SMP S4
          </div>

          <h1 class="hero-title-animated font-outfit font-black text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] text-white tracking-tighter leading-[0.85] select-none">
            Cẩm Nang<br />
            <span class="hero-title-gradient bg-gradient-to-r from-[#ff55ff] via-[#e0a6ff] to-[#55ffff] bg-clip-text text-transparent inline-block drop-shadow-[0_0_35px_rgba(255,85,255,0.4)]">
              Cổ Vật
            </span>
          </h1>

          <p class="hero-title-gradient font-outfit font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r from-[#b7a9ca] via-[#ff55ff] to-[#55ffff] bg-clip-text text-transparent mt-1 select-none">
            Hội Hè SMP Wiki
          </p>

          <p class="hero-subtitle-animated text-[#b7a9ca] text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl ml-auto mr-auto lg:ml-0 lg:mr-0 font-sans">
            Hệ thống tài liệu hướng dẫn và tra cứu tính năng dành cho member cụm sinh tồn Hội Hè SMP. Khám phá các cổ vật chế tạo, kỹ năng rèn đúc và hệ thống plugins tùy biến.
          </p>

          <div class="hero-actions-animated flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mt-2">
            <a
              href="#sections"
              class="px-5 sm:px-6 py-3 rounded-none border-3 border-[#ff55ff] bg-[#ff55ff]/10 hover:bg-[#ff55ff]/20 text-white font-outfit text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,85,255,0.4)] active:scale-95 cursor-pointer"
            >
              Bắt Đầu Khám Phá ↓
            </a>
            <a
              href="/guide/"
              @click="playChestSound"
              class="px-5 sm:px-6 py-3 rounded-none border-3 border-[#4a3b5c]/80 bg-[#20182b]/80 hover:bg-[#4a3b5c]/30 text-[#e0d7ec] font-outfit text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Tài Liệu Hướng Dẫn
            </a>
          </div>
        </div>

        <!-- Hero Graphic Right (3D Cube + Server Icon) -->
        <div class="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[240px] sm:min-h-[300px]">
          <div class="absolute w-72 h-72 rounded-full border-4 border-dashed border-[#ff55ff]/15 animate-spin -z-10" style="animation-duration: 25s" />
          <div class="absolute w-52 h-52 rounded-full border-2 border-dashed border-[#55ffff]/15 animate-spin -z-10" style="animation-duration: 12s; animation-direction: reverse;" />

          <!-- Server Icon -->
          <img
            src="/server-icon.png"
            alt="Hội Hè Lifesteal"
            class="w-28 h-28 sm:w-36 sm:h-36 rounded-none mb-4 hero-title-animated drop-shadow-[0_0_30px_rgba(255,85,255,0.35)]"
          />

          <div class="animate-bounce" style="animation-duration: 4s">
            <ThreeDBlock :size="80" />
          </div>

          <div class="mt-4 px-4 py-2 rounded-none bg-[#100010]/80 border-2 border-[#2e0066]/70 text-center shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <span class="font-vt text-xs sm:text-sm tracking-widest text-[#ff55ff] uppercase block">Hội Hè Lodestone Forge</span>
            <span class="font-vt text-[10px] sm:text-xs text-[#aaaaaa]">Độc quyền đúc vũ khí custom</span>
          </div>
        </div>

      </div>

      <!-- Discord Large Banner Section -->
      <section class="mt-16 sm:mt-20 mc-dark-panel p-6 sm:p-8 md:p-10 border-2 border-[#5865F2] bg-[#5865F2]/10 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-[0_0_35px_rgba(88,101,242,0.2)] hover:shadow-[0_0_50px_rgba(88,101,242,0.35)] transition-all duration-500">
        <!-- background glows -->
        <div class="absolute -top-10 -left-10 w-48 h-48 bg-[#5865F2]/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>
        <div class="absolute -bottom-10 -right-10 w-48 h-48 bg-[#ff55ff]/10 rounded-full blur-[80px] -z-10"></div>

        <div class="flex-1 flex flex-col gap-3 text-center md:text-left">
          <span class="text-[10px] uppercase font-black tracking-widest text-[#5865F2] bg-white/10 px-2.5 py-1 w-fit ml-auto mr-auto md:ml-0 md:mr-0 border border-[#5865F2]/40 rounded-none">
            Cộng đồng Minecraft
          </span>
          <h2 class="font-outfit font-black text-xl sm:text-2xl md:text-4xl text-white tracking-tight uppercase">
            Tham gia Discord Hội Hè SMP
          </h2>
          <p class="text-xs sm:text-sm text-[#b7a9ca] leading-relaxed max-w-xl ml-auto mr-auto md:ml-0 md:mr-0 font-sans">
            Nơi kết nối các người chơi, đăng ký tham gia máy chủ sinh tồn, giao lưu buôn bán và nhận hỗ trợ từ Ban Quản Trị 24/7. Hàng trăm thành viên đang chờ đón bạn!
          </p>
        </div>

        <div class="flex-shrink-0 w-full md:w-auto text-center">
          <a
            href="https://discord.gg/As4h3xMDnR"
            target="_blank"
            @click="playChestSound"
            class="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white font-outfit text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(88,101,242,0.4)] cursor-pointer w-full md:w-auto border-2 border-white/20"
          >
            <svg class="w-5 h-5 fill-current" viewBox="0 0 127.14 96.36">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.4-5c.9-.65,1.76-1.35,2.58-2.07a75.48,75.48,0,0,0,75.68,0c.82.72,1.68,1.42,2.58,2.07a68.43,68.43,0,0,1-10.4,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129.07,50.12,122.9,27.35,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
            </svg>
            Tham Gia Server Ngay
          </a>
        </div>
      </section>

      <!-- Feature Blocks Section -->
      <section id="sections" class="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-[#4a3b5c]/30 scroll-mt-20">
        <h2 class="font-outfit font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight uppercase text-center mb-3 sm:mb-4">
          3 Chuyên Mục Tra Cứu Chính
        </h2>
        <p class="text-[#b7a9ca] text-xs sm:text-sm text-center max-w-xl ml-auto mr-auto mb-8 sm:mb-12 font-sans">
          Lựa chọn một trong các chuyên mục dưới đây để bắt đầu tìm hiểu về cơ chế và tính năng của máy chủ.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          <div
            v-for="card in cards"
            :key="card.id"
            @click="handleNav(card.link)"
            class="mc-dark-panel p-4 sm:p-6 flex flex-col gap-4 sm:gap-5 cursor-pointer"
            :class="card.borderColor"
          >
            <!-- Badge & Icon -->
            <div class="flex items-center justify-between">
              <span class="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-none border font-outfit" :class="card.badgeColor">
                {{ card.subtitle }}
              </span>
              <PixelIcon :itemId="card.itemId" :size="40" :enchanted="true" />
            </div>

            <!-- Content -->
            <div class="flex-1 flex flex-col gap-2">
              <h3 class="font-outfit font-black text-lg sm:text-xl text-white group-hover:text-[#ff55ff] transition-colors">
                {{ card.title }}
              </h3>
              <p class="text-[11px] sm:text-xs text-[#b7a9ca] leading-relaxed font-sans">
                {{ card.desc }}
              </p>
            </div>

            <!-- Action button -->
            <div class="mt-auto pt-3 sm:pt-4 border-t border-[#4a3b5c]/30 flex items-center justify-between text-[10px] sm:text-xs font-bold font-outfit uppercase tracking-wider text-[#ff55ff] hover:text-white">
              <span>Khám Phá Chi Tiết</span>
              <span>➔</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Common Commands Section -->
      <section class="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-[#4a3b5c]/30">
        <h2 class="font-outfit font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight uppercase text-center mb-3 sm:mb-4">
          Các câu lệnh thông dụng
        </h2>
        <p class="text-[#b7a9ca] text-xs sm:text-sm text-center max-w-2xl ml-auto mr-auto mb-8 sm:mb-12 font-sans leading-relaxed">
          Ghi nhớ và sử dụng nhanh các câu lệnh hữu ích này trực tiếp trong quá trình chơi game tại máy chủ.
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          <div
            v-for="cmd in [
              { label: '/trade', desc: 'Giao dịch từ xa an toàn với người chơi khác.' },
              { label: '/grave', desc: 'Xem lại toạ độ các bia mộ khi bị chết.' },
              { label: '/skills', desc: 'Mở bảng kỹ năng nhập vai RPG ValhallaMMO.' },
              { label: '/help', desc: 'Trợ giúp toàn tập cơ chế tính năng của server.' },
              { label: '/teams', desc: 'Quản lý tổ đội đồng đội sinh tồn chung.' }
            ]"
            :key="cmd.label"
            class="mc-dark-panel p-3 sm:p-4 flex flex-col gap-1.5 sm:gap-2 border-l-4 border-l-[#ff55ff]/70 text-left hover:border-l-[#ff55ff] transition-all"
          >
            <span class="font-vt text-base sm:text-lg font-black text-[#ff55ff] tracking-wide block">
              {{ cmd.label }}
            </span>
            <p class="text-[10px] sm:text-[11px] text-[#b7a9ca] leading-relaxed font-sans">
              {{ cmd.desc }}
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="mt-auto pt-6 sm:pt-8 border-t border-[#4a3b5c]/20 text-center text-[10px] sm:text-xs text-[#7b6299] font-outfit pb-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-1">
        <p>Hội Hè SMP Wiki &copy; 2026. Sáng lập bởi <a href="/support" class="text-[#ff55ff] hover:underline font-bold">Minazuki</a>.</p>
        <p>Tham gia ngay cộng đồng <a href="https://discord.gg/As4h3xMDnR" target="_blank" class="text-[#55ffff] hover:underline font-bold">Discord Hội Hè SMP</a> để nhận hỗ trợ.</p>
        <p class="mt-2 text-[9px] sm:text-[10px] opacity-70">Sản phẩm không thuộc bản quyền Mojang Studios.</p>
      </div>
    </footer>

  </div>
</template>
