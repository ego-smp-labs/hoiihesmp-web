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
      { text: 'Hướng Dẫn Cơ Bản', items: [
        { text: 'Lifesteal & Câu Lệnh', link: '/guide/mechanics' },
        { text: 'Tổng Quan Hướng Dẫn', link: '/guide/' }
      ]},
      { text: 'Cổ Vật & Vũ Khí', items: [
        { text: 'Búa Exclusive', link: '/wiki/mace-exclusive' },
        { text: 'Giáo Exclusive', link: '/wiki/spear-exclusive' },
        { text: 'Lõi Ma Pháp', link: '/wiki/cores' },
        { text: 'Vật Liệu Lò Rèn', link: '/wiki/materials' },
        { text: 'Lodestone Forge', link: '/wiki/forge' },
        { text: 'Hướng Dẫn Chế Tạo', link: '/wiki/guide' },
        { text: 'Vũ Khí Cổ Đại', link: '/wiki/custom-weapons' }
      ]},
      { text: 'Plugin Gameplay', items: [
        { text: 'Plugin Vane', link: '/guide/vane' },
        { text: 'ValhallaMMO', link: '/guide/valhallammo' }
      ]},
      { text: 'Hỗ Trợ & Luật Lệ', link: '/support' }
    ],
    sidebar: [
      {
        text: 'Tổng Quan',
        items: [
          { text: 'Quay Về Trang Chủ', link: '/' },
          { text: 'Hỗ Trợ & Luật Lệ', link: '/support' }
        ]
      },
      {
        text: 'Hướng Dẫn Cơ Bản',
        items: [
          { text: 'Lifesteal & Câu Lệnh', link: '/guide/mechanics' },
          { text: 'Tổng Quan Hướng Dẫn', link: '/guide/' }
        ]
      },
      {
        text: 'Cổ Vật & Vũ Khí',
        collapsed: false,
        items: [
          { text: 'Búa Exclusive', link: '/wiki/mace-exclusive' },
          { text: 'Giáo Exclusive', link: '/wiki/spear-exclusive' },
          { text: 'Lõi Ma Pháp', link: '/wiki/cores' },
          { text: 'Vật Liệu Lò Rèn', link: '/wiki/materials' },
          { text: 'Lodestone Forge', link: '/wiki/forge' },
          { text: 'Hướng Dẫn Chế Tạo', link: '/wiki/guide' },
          { text: 'Vũ Khí Cổ Đại', link: '/wiki/custom-weapons' }
        ]
      },
      {
        text: 'Plugin Gameplay',
        items: [
          { text: 'Plugin Vane', link: '/guide/vane' },
          { text: 'ValhallaMMO', link: '/guide/valhallammo' }
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
