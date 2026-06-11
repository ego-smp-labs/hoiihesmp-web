import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: "Hội Hè SMP Wiki",
  description: "Cẩm nang hướng dẫn và tra cứu tính năng cụm máy chủ Hội Hè SMP",
  cleanUrls: true,
  ignoreDeadLinks: true,
  appearance: 'dark',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800;900&family=Outfit:wght@400;600;700;800;900&family=VT323&family=Inter:wght@400;500;600;700&display=swap' }]
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
      { text: 'Wiki Mace', link: '/wiki/mace-exclusive' },
      { text: 'Vũ Khí Custom', link: '/wiki/custom-weapons' },
      { text: 'Hướng Dẫn', items: [
        { text: 'Giới Thiệu', link: '/guide/' },
        { text: 'Cơ Chế Lifesteal', link: '/guide/mechanics#cơ-chế-lifesteal-hút--cướp-tim-sinh-tồn' },
        { text: 'Plugin Vane', link: '/guide/vane' },
        { text: 'Plugin ValhallaMMO', link: '/guide/valhallammo' },
        { text: 'Cơ Chế Khác', link: '/guide/mechanics' }
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
            { text: 'Plugin ValhallaMMO', link: '/guide/valhallammo' },
            { text: 'Cơ Chế & Câu Lệnh', link: '/guide/mechanics' }
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
