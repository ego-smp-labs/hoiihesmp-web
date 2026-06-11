import { defineConfig } from 'vitepress'
  import tailwindcss from '@tailwindcss/vite'

  export default defineConfig({
    title: "Hội Hè SMP Wiki",
    description: "Cẩm nang hướng dẫn và tra cứu tính năng cụm máy chủ Hội Hè SMP",
    cleanUrls: true,
    ignoreDeadLinks: true,
    themeConfig: {
      logo: 'https://cdn.jsdelivr.net/npm/minecraft-icon-items@latest/items/heavy_core.png',
      nav: [
        { text: 'Trang Chủ', link: '/' },
        { text: 'Wiki Mace', link: '/wiki/mace-exclusive' },
        { text: 'Vũ Khí Custom', link: '/wiki/custom-weapons' },
        { text: 'Hướng Dẫn', items: [
          { text: 'Giới Thiệu', link: '/guide/' },
          { text: 'Plugin Vane', link: '/guide/vane' },
          { text: 'Plugin ValhallaMMO', link: '/guide/valhallammo' }
        ]}
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
        { icon: 'github', link: 'https://github.com/nhatthang/hoiihesmp-web' }
      ]
    },
    vite: {
      plugins: [
        tailwindcss()
      ]
    }
  })
