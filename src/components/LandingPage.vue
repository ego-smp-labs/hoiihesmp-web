<script lang="ts">
const cards = [
  {
    id: "lifesteal",
    title: "Cơ Chế Lifesteal",
    subtitle: "Hút & Cướp Tim Sinh Tồn",
    desc: "Chi tiết quy tắc cướp tim khi tiêu diệt đối thủ, trừ tim khi bị hạ gục, cách chế tạo và sử dụng trái tim hồi máu, cùng các câu lệnh rút tim /withdraw hữu ích.",
    link: "/guide/mechanics#cơ-chế-lifesteal-hút--cướp-tim-sinh-tồn",
    itemId: "enchanted_golden_apple",
    badgeColor: "bg-[#e63946]/10 border-[#e63946]/30 text-[#e63946]",
    hoverRing: "group-hover:ring-[#e63946]/50"
  },
  {
    id: "mace",
    title: "Mace Độc Quyền",
    subtitle: "Lodestone Forge & Thần Binh",
    desc: "Cẩm nang tra cứu chi tiết công thức lò rèn Lodestone, chỉ số sát thương, kỹ năng active và lời nguyền cân bằng cho các vũ khí Mace Exclusive.",
    link: "/wiki/mace-exclusive",
    itemId: "mace_void",
    badgeColor: "bg-[#ff55ff]/10 border-[#ff55ff]/30 text-[#ff55ff]",
    hoverRing: "group-hover:ring-[#ff55ff]/50"
  },
  {
    id: "custom",
    title: "Vũ Khí Độc Quyền",
    subtitle: "Cổ Vật Custom Khác",
    desc: "Nơi tổng hợp thông tin chế tạo các vũ khí custom độc nhất khác của máy chủ, tiêu biểu như Kiếm Cổ Nguyền Cursed Sword mang sức mạnh rải rác linh hồn.",
    link: "/wiki/custom-weapons",
    itemId: "cursed_sword",
    badgeColor: "bg-[#7209b7]/15 border-[#7209b7]/30 text-[#b23cd9]",
    hoverRing: "group-hover:ring-[#7209b7]/50"
  },
  {
    id: "vane",
    title: "Plugin Vane",
    subtitle: "QoL, Portal & Trifles",
    desc: "Hướng dẫn các tiện ích sinh tồn vanilla-like: vật phẩm Vane Trifles, cổng dịch chuyển tự chế, hòm thư chuyển phát và claim vùng đất.",
    link: "/guide/vane",
    itemId: "slime_bucket",
    badgeColor: "bg-[#55ffff]/10 border-[#55ffff]/30 text-[#55ffff]",
    hoverRing: "group-hover:ring-[#55ffff]/50"
  },
  {
    id: "valhalla",
    title: "ValhallaMMO",
    subtitle: "RPG Skills & Smithing",
    desc: "Tổng quan hệ thống RPG: bảng kỹ năng /skills, cấp nghề rèn, phẩm chất trang bị, perk Smithing và lộ trình tăng cấp hiệu quả.",
    link: "/guide/valhallammo",
    itemId: "diamond_pickaxe",
    badgeColor: "bg-[#ffaa00]/10 border-[#ffaa00]/30 text-[#ffaa00]",
    hoverRing: "group-hover:ring-[#ffaa00]/50"
  }
]

const commonCommands = [
  { label: '/trade', desc: 'Giao dịch từ xa an toàn với người chơi khác.' },
  { label: '/grave', desc: 'Xem lại toạ độ các bia mộ khi bị chết.' },
  { label: '/skills', desc: 'Mở bảng kỹ năng nhập vai RPG ValhallaMMO.' },
  { label: '/help', desc: 'Trợ giúp toàn tập cơ chế tính năng của server.' },
  { label: '/teams', desc: 'Quản lý tổ đội đồng đội sinh tồn chung.' },
  { label: '/pvp', desc: 'Bật hoặc tắt trạng thái chiến đấu (PvP) của bản thân.' },
  { label: '/tpa | /tpahere', desc: 'Dịch chuyển. Chờ đứng yên 5s, tiêu hao 5 cấp XP, giới hạn tối đa 500 block.' }
]
</script>

<script setup lang="ts">
import PixelIcon from './PixelIcon.vue'
import AudioToggle from './AudioToggle.vue'
import ThreeDModelViewer from './ThreeDModelViewer.vue'
import DiscordIcon from './DiscordIcon.vue'
import { useRouter } from 'vitepress'
import { playChestSound } from '../utils/audio'

const router = useRouter()

const handleNav = (link: string) => {
  playChestSound()
  router.go(link)
}
</script>

<template>
  <div class="landing-page min-h-screen bg-[#0c0712] text-[#e0d7ec] relative bg-grid-pattern pb-16 flex flex-col font-sans overflow-x-hidden">

    <!-- Refined Ambient Glow Effects -->
    <div class="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-[#ff55ff]/10 rounded-full blur-[150px] -z-10 pointer-events-none animate-pulse-slow"></div>
    <div class="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-[#55ffff]/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

    <!-- Navigation Header - Glassmorphic -->
    <header class="w-full bg-[#0c0712]/70 backdrop-blur-xl border-b border-white/5 py-3 px-4 sm:px-6 md:px-8 sticky top-0 z-50 transition-all duration-300 shadow-sm">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" class="flex items-center gap-3 shrink-0 group outline-none">
          <img
            src="/mace-icon.png"
            alt="Hội Hè SMP"
            class="w-8 h-8 sm:w-10 sm:h-10 rounded-none pixelated transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 drop-shadow-[0_0_10px_rgba(255,85,255,0.4)]"
          />
          <span class="font-outfit font-black text-lg sm:text-xl tracking-wide whitespace-nowrap bg-gradient-to-r from-[#4ade80] to-[#ffffff] bg-clip-text text-transparent transition-all duration-300">
            HỘI HÈ SMP
          </span>
        </a>

        <div class="flex items-center gap-3 sm:gap-5">
          <AudioToggle class="scale-90 sm:scale-100" />
          <a
            href="/support"
            @click="playChestSound"
            class="hidden lg:inline-flex px-4 py-2 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white font-outfit text-xs font-bold uppercase tracking-wider transition-all duration-300"
          >
            Hỗ Trợ
          </a>
          <a
            href="https://discord.gg/As4h3xMDnR"
            target="_blank"
            rel="noopener noreferrer"
            @click="playChestSound"
            class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-outfit text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 transition-all duration-300 shadow-[0_4px_15px_rgba(88,101,242,0.3)] hover:shadow-[0_6px_20px_rgba(88,101,242,0.5)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <DiscordIcon class="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            <span class="hidden sm:inline">Discord</span>
          </a>
          <a
            href="/wiki/mace-exclusive"
            @click="playChestSound"
            class="hidden sm:inline-flex px-5 py-2.5 rounded-full border border-[#ff55ff]/40 bg-[#ff55ff]/10 hover:bg-[#ff55ff]/20 text-white font-outfit text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,85,255,0.3)] hover:-translate-y-0.5"
          >
            Wiki
          </a>
        </div>
      </div>
    </header>

    <!-- Main Hero Section -->
    <main class="flex-1 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col justify-center py-12 sm:py-20 lg:py-28 relative">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        <!-- Hero Text Left -->
        <div class="lg:col-span-7 flex flex-col gap-6 sm:gap-8 text-center lg:text-left z-10">
          <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
            <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-semibold text-white/80 tracking-wide backdrop-blur-sm">
              ✨ Máy chủ sinh tồn Hội Hè SMP S4
            </span>
            <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-[#e63946]/10 border border-[#e63946]/20 text-[11px] sm:text-xs font-semibold text-[#ff6b7b] tracking-wide backdrop-blur-sm">
              🩸 Tính năng Lifesteal cướp tim kịch tính!
            </span>
          </div>

          <h1 class="font-outfit font-black text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] leading-[1.05] tracking-tight text-white select-none">
            <span class="block bg-gradient-to-r from-white via-white to-[#c084fc] bg-clip-text text-transparent">Cẩm Nang</span>
            <span class="flex items-center justify-center lg:justify-start gap-3 mt-1 sm:mt-2">
              <span class="bg-gradient-to-r from-[#ff55ff] via-[#e0a6ff] to-[#55ffff] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,85,255,0.3)]">Cổ Vật</span>
              <img
                src="/mace-icon.png"
                alt="Mace Icon"
                class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 inline-block rounded-none pixelated transition-transform duration-500 hover:scale-110 hover:rotate-12 animate-float"
              />
            </span>
          </h1>

          <p class="font-outfit font-black text-2xl sm:text-3xl md:text-4xl tracking-tight text-white/90">
            Hệ sinh thái <span class="text-[#4ade80] drop-shadow-[0_0_12px_rgba(74,222,128,0.3)]">Hội Hè SMP</span>
          </p>

          <p class="text-[#b7a9ca] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans font-medium">
            Khám phá tài liệu hướng dẫn toàn diện về hệ thống chế tạo cổ vật, kỹ năng rèn đúc Lodestone Forge và các plugins tùy biến độc quyền dành cho member.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
            <a
              href="#sections"
              class="px-8 py-4 rounded-full bg-gradient-to-r from-[#ff55ff] to-[#b23cd9] text-white font-outfit text-sm font-black uppercase tracking-wider transition-all duration-300 hover:shadow-[0_8px_25px_rgba(255,85,255,0.4)] hover:-translate-y-1 active:translate-y-0 text-center"
            >
              Bắt Đầu Khám Phá
            </a>
            <a
              href="/guide/"
              @click="playChestSound"
              class="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-outfit text-sm font-black uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 active:translate-y-0 backdrop-blur-sm text-center"
            >
              Tài Liệu Hướng Dẫn
            </a>
          </div>
        </div>

        <!-- Hero Graphic Right -->
        <div class="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[250px] sm:min-h-[400px] mt-8 lg:mt-0">
          <!-- Soft rotating background rings -->
          <div class="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-white/10 animate-spin -z-10 hidden sm:block" style="animation-duration: 40s"></div>
          <div class="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full border border-dashed border-[#ff55ff]/20 animate-spin -z-10 hidden sm:block" style="animation-duration: 25s; animation-direction: reverse;"></div>

          <!-- The Model Viewer Wrapper -->
          <div class="relative w-full max-w-[320px] sm:max-w-[400px] aspect-square transition-all duration-500 animate-float drop-shadow-2xl">
            <ThreeDModelViewer
              src="/minecraft_mace__sapixcraft.glb"
              alt="Mace Exclusive 3D Model"
              :autoRotate="false"
              :cameraControls="true"
              :shadowIntensity="2.0"
            />
          </div>

          <!-- Floating Label -->
          <div class="absolute bottom-0 sm:-bottom-6 px-6 py-3 rounded-2xl bg-[#120b1a]/80 backdrop-blur-xl border border-white/10 text-center shadow-xl hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
            <span class="font-outfit text-sm sm:text-base font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#ff55ff] to-[#55ffff] uppercase block">
              Lodestone Forge
            </span>
            <span class="font-sans text-[10px] sm:text-xs text-[#b7a9ca] font-medium mt-1 block">
              Nghi thức rèn vũ khí độc quyền
            </span>
          </div>
        </div>

      </div>

      <!-- Call to Action Banner -->
      <section class="mt-24 sm:mt-32 p-1 border border-[#5865F2]/30 rounded-3xl bg-gradient-to-r from-[#5865F2]/10 to-[#120b1a] relative overflow-hidden group hover:border-[#5865F2]/60 transition-colors duration-500 shadow-lg">
        <div class="absolute inset-0 bg-[#5865F2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div class="bg-[#0c0712]/90 backdrop-blur-2xl rounded-[22px] p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div class="flex-1 text-center md:text-left flex flex-col gap-4">
            <span class="text-[10px] sm:text-xs uppercase font-black tracking-widest text-[#5865F2] font-outfit">
              Cộng Đồng Người Chơi
            </span>
            <h2 class="font-outfit font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
              Tham gia Discord Hội Hè SMP
            </h2>
            <p class="text-sm sm:text-base text-[#b7a9ca] leading-relaxed max-w-xl mx-auto md:mx-0 font-medium">
              Nơi kết nối giao lưu, đăng ký tham gia máy chủ sinh tồn, cập nhật tính năng mới nhất và nhận hỗ trợ trực tiếp từ Ban Quản Trị 24/7.
            </p>
          </div>
          <div class="flex-shrink-0 w-full md:w-auto">
            <a
              href="https://discord.gg/As4h3xMDnR"
              target="_blank"
              rel="noopener noreferrer"
              @click="playChestSound"
              class="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-outfit text-sm font-black uppercase tracking-wider transition-all duration-300 hover:shadow-[0_8px_25px_rgba(88,101,242,0.4)] hover:-translate-y-1 active:translate-y-0"
            >
              <DiscordIcon class="w-5 h-5 fill-current" />
              Gia Nhập Ngay
            </a>
          </div>
        </div>
      </section>

      <!-- Main Feature Grid Section -->
      <section id="sections" class="mt-20 sm:mt-32 scroll-mt-24">
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 class="font-outfit font-black text-3xl sm:text-4xl text-white tracking-tight uppercase mb-4">
            Khám Phá Các Chuyên Mục
          </h2>
          <p class="text-[#b7a9ca] text-sm sm:text-base font-medium leading-relaxed">
            Hệ thống tài liệu và wiki chi tiết giúp bạn nhanh chóng nắm bắt các kỹ năng sinh tồn và làm chủ các món vũ khí độc nhất của máy chủ.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 xl:gap-5">
          <div
            v-for="card in cards"
            :key="card.id"
            @click="handleNav(card.link)"
            class="group relative p-[1px] rounded-3xl bg-white/5 hover:bg-gradient-to-b hover:from-white/20 hover:to-white/5 transition-all duration-500 cursor-pointer overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="h-full bg-[#120b1a]/90 backdrop-blur-xl rounded-[23px] p-6 sm:p-7 xl:p-5 flex flex-col relative z-10 transition-transform duration-500 group-hover:scale-[0.98]">
              <!-- Icon Header -->
              <div class="flex items-center justify-between gap-2 mb-6">
                <span class="text-[9px] sm:text-[10px] xl:text-[9px] 2xl:text-[10px] uppercase font-bold tracking-wider px-2.5 py-1.5 rounded-full font-outfit text-left leading-tight" :class="card.badgeColor">
                  {{ card.subtitle }}
                </span>
                <div class="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-300" :class="card.hoverRing">
                  <PixelIcon :itemId="card.itemId" :size="24" :enchanted="true" class="group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              <!-- Content -->
              <div class="flex-1 flex flex-col gap-2.5">
                <h3 class="font-outfit font-black text-lg sm:text-xl xl:text-lg 2xl:text-xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#ff55ff] transition-all duration-300 leading-tight">
                  {{ card.title }}
                </h3>
                <p class="text-[11px] sm:text-xs text-[#b7a9ca] leading-relaxed font-medium">
                  {{ card.desc }}
                </p>
              </div>

              <!-- Read more button -->
              <div class="mt-8 flex items-center justify-between text-xs font-bold font-outfit uppercase tracking-widest text-[#b7a9ca] group-hover:text-white transition-colors duration-300">
                <span>Khám phá ngay</span>
                <span class="transform group-hover:translate-x-2 transition-transform duration-300">➔</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Commands Grid -->
      <section class="mt-20 sm:mt-32 pt-16 border-t border-white/5">
        <div class="text-center mb-10 sm:mb-14">
          <h2 class="font-outfit font-black text-2xl sm:text-3xl text-white tracking-tight uppercase mb-4">
            Lệnh Hữu Ích Cần Biết
          </h2>
          <p class="text-[#b7a9ca] text-sm font-medium">Lưu lại để sử dụng nhanh trong quá trình sinh tồn</p>
        </div>

        <div class="flex flex-wrap justify-center gap-4 sm:gap-6">
          <div
            v-for="cmd in commonCommands"
            :key="cmd.label"
            class="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <span class="font-outfit text-lg sm:text-xl font-black text-[#55ffff] tracking-wide block mb-2 drop-shadow-[0_0_8px_rgba(85,255,255,0.3)]">
              {{ cmd.label }}
            </span>
            <p class="text-[11px] sm:text-xs text-[#b7a9ca] leading-relaxed font-medium">
              {{ cmd.desc }}
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="mt-20 py-8 border-t border-white/5 text-center text-xs text-[#7b6299] font-outfit">
      <div class="max-w-7xl mx-auto px-4 flex flex-col gap-2 items-center">
        <p>Hội Hè SMP Wiki &copy; 2026. Sáng lập bởi <a href="https://melatonin-dev.xyz" target="_blank" rel="noopener noreferrer" class="text-white hover:text-[#ff55ff] transition-colors font-bold">Melatonin</a>.</p>
        <p>Mọi thắc mắc vui lòng gửi về <a href="https://discord.gg/As4h3xMDnR" target="_blank" class="text-white hover:text-[#55ffff] transition-colors font-bold">Discord Server</a> để được hỗ trợ.</p>
        <p class="text-[10px] opacity-50 mt-2 font-sans">Not an official Minecraft product. Not approved by or associated with Mojang.</p>
      </div>
    </footer>

  </div>
</template>
