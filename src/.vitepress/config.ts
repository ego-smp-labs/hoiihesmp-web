import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: "Hội Hè SMP Wiki",
  description: "Cẩm nang hướng dẫn và tra cứu tính năng cụm máy chủ Hội Hè SMP",
  cleanUrls: true,
  ignoreDeadLinks: true,
  appearance: 'dark',
  head: [
    ['link', { rel: 'icon', href: '/mace-icon.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;700&family=Outfit:wght@700;900&family=VT323&family=Inter:wght@400;600&display=swap&subset=latin,latin-ext,vietnamese' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;700&family=Outfit:wght@700;900&family=VT323&family=Inter:wght@400;600&display=swap&subset=latin,latin-ext,vietnamese' }],
    ['meta', { property: 'og:title', content: 'Hội Hè SMP Wiki' }],
    ['meta', { property: 'og:description', content: 'Cẩm nang hướng dẫn và tra cứu tính năng cụm máy chủ Hội Hè SMP' }],
    ['meta', { property: 'og:image', content: '/bg.png' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],
  themeConfig: {
    logo: '/mace-icon.png',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Tìm kiếm...', buttonAriaLabel: 'Tìm kiếm' },
          modal: {
            noResultsText: 'Không tìm thấy kết quả',
            resetButtonTitle: 'Xóa từ khóa',
            footer: { selectText: 'Chọn', navigateText: 'Di chuyển', closeText: 'Đóng' }
          }
        }
      }
    },
    nav: [
      { text: 'Trang Chủ', link: '/' },
      { text: 'Cổ Vật & Vũ Khí', items: [
        { text: 'Mace Exclusive', link: '/wiki/mace-exclusive' },
        { text: 'Vũ Khí Custom', link: '/wiki/custom-weapons' }
      ]},
      { text: 'Hướng Dẫn', items: [
        { text: 'Plugin Vane', link: '/guide/vane' },
        { text: 'ValhallaMMO', link: '/guide/valhallammo' },
        { text: 'Lifesteal & Câu Lệnh', link: '/guide/mechanics' },
        { text: 'Tổng Quan Hướng Dẫn', link: '/guide/' }
      ]},
      { text: 'Hỗ Trợ', link: '/support' }
    ],
    sidebar: [
      {
        text: '🏠 Tổng Quan',
        items: [
          { text: 'Quay Về Trang Chủ', link: '/' },
          { text: 'Hỗ Trợ & Luật Lệ', link: '/support' }
        ]
      },
      {
        text: '⚔️ Cổ Vật & Vũ Khí',
        items: [
          { text: 'Mace Exclusive', link: '/wiki/mace-exclusive' },
          { text: 'Vũ Khí Custom', link: '/wiki/custom-weapons' }
        ]
      },
      {
        text: '🧩 Plugin Gameplay',
        items: [
          { text: 'Plugin Vane', link: '/guide/vane' },
          { text: 'ValhallaMMO', link: '/guide/valhallammo' }
        ]
      },
      {
        text: '🩸 Sinh Tồn & Lệnh',
        items: [
          { text: 'Tổng Quan Hướng Dẫn', link: '/guide/' },
          { text: 'Lifesteal & Câu Lệnh', link: '/guide/mechanics' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nhatthang/hoiihesmp-web' },
      { icon: 'discord', link: 'https://discord.gg/As4h3xMDnR' }
    ]
  },
  vite: {
    plugins: [
      tailwindcss()
    ],
    build: {
      minify: 'esbuild',
      cssCodeSplit: true
    },
    esbuild: {
      drop: ['console', 'debugger']
    }
  }
})
