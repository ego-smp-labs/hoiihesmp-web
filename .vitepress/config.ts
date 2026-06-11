import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: "Hội Hè SMP Wiki",
  description: "Cẩm nang hướng dẫn và tra cứu tính năng cụm máy chủ Hội Hè SMP",
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=VT323&family=Inter:wght@400;500;600;700&display=swap' }]
  ],
  themeConfig: {
    logo: 'https://cdn.jsdelivr.net/gh/InventivetalentDev/minecraft-assets@1.21/assets/minecraft/textures/block/heavy_core.png',
    nav: [
      { text: 'Trang Chủ', link: '/' },
      { text: 'Wiki Mace', link: '/wiki/mace-exclusive' },
      { text: 'Vũ Khí Custom', link: '/wiki/custom-weapons' },
      { text: 'Hướng Dẫn', items: [
        { text: 'Giới Thiệu', link: '/guide/' },
        { text: 'Plugin Vane', link: '/guide/vane' },
        { text: 'Plugin ValhallaMMO', link: '/guide/valhallammo' }
      ]},
      { text: 'Hỗ Trợ', link: '/support' }
    ],
    sidebar: {
      '/wiki/': [
        {
          text: 'Tra Cứu Wiki',
          items: [
            { text: 'Mace Exclusive', link: '/wiki/mace-exclusive' },
            { text: 'Vũ Khí Custom khác', link: '/wiki/custom-weapons' }
          ]
        }
      ],
      '/guide/': [
        {
          text: 'Hướng Dẫn Member',
          items: [
            { text: 'Giới thiệu chung', link: '/guide/' },
            { text: 'Plugin Vane', link: '/guide/vane' },
            { text: 'Plugin ValhallaMMO', link: '/guide/valhallammo' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nhatthang/hoiihesmp-web' },
      { icon: 'discord', link: 'https://discord.gg/As4h3xMDnR' }
    ]
  },
    vite: {
      plugins: [
        tailwindcss()
      ]
    }
  })
