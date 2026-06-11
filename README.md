# Hội Hè SMP Wiki & Landing Page

Trang chủ và tài liệu tra cứu (Wiki) chính thức dành cho các thành viên trong cụm máy chủ sinh tồn Minecraft **Hội Hè SMP (Season 4)**.

Dự án được xây dựng bằng **VitePress (Vue 3 + TypeScript)** kết hợp **Tailwind CSS v4**, mang lại tốc độ tải trang tĩnh tức thì, tối ưu hóa SEO và hiệu năng hiển thị cực kỳ mượt mà.

---

## ⚡ Các Điểm Nổi Bật Của Dự Án

- **Landing Page Độc Lập**: Thiết kế giao diện trang chủ hoành tráng với 3 khối dẫn trực tiếp sang các chuyên mục:
  - *Mace Độc Quyền* (Lodestone Forge & 9 Thần Binh)
  - *Vũ Khí Custom khác* (Kiếm Cổ Nguyền)
  - *Hướng dẫn plugins* (Vane & ValhallaMMO)
- **Khối 3D Lodestone**: Khối lập phương 3D xoay mượt mà bằng GPU sử dụng CSS 3D Transforms gốc.
- **Tối Ưu Hiệu Năng & Tránh Lag**:
  - Không vẽ SVG lặp DOM phức tạp, sử dụng ảnh PNG chính thức của Minecraft từ jsDelivr CDN (`minecraft-icon-items`).
  - **Enchanted Glow Mask**: Sử dụng CSS `mask-image` đè lên PNG giúp dải sáng bùa chú chạy dọc thân vật phẩm cực kỳ đẹp mắt.
  - **Tooltip cải tiến**: Hover chỉ hiển thị tên mặc định (giảm tải DOM). Click để mở **Drawer/Modal trượt** hiển thị lore chi tiết (hoàn hảo cho di động).
- **Âm thanh Retro (Web Audio API)**: Tự tổng hợp sóng âm Click gỗ (wood click) và Mở rương (chest open) ngay trên trình duyệt mà không cần tải file MP3 ngoài.

---

## 🏗️ Cấu Trúc Dự Án

```text
├── .vitepress/           # Cấu hình chính của VitePress và Custom Theme
│   ├── config.ts         # Cấu hình menu điều hướng, sidebar, routing
│   └── theme/            # Theme CSS v4 và đăng ký components toàn cục
├── components/           # Các component giao diện Vue 3 + TypeScript
│   ├── AudioToggle.vue   # Bật/tắt và phát âm thanh retro
│   ├── CraftingGrid.vue  # Lưới rèn đúc 3x3 tương tác
│   ├── LandingPage.vue   # Giao diện Trang chủ (Home)
│   ├── PixelIcon.vue     # Load ảnh PNG CDN và phủ Enchanted Glow
│   └── ThreeDBlock.vue   # Khối lập phương 3D xoay
├── data/                 # Cơ sở dữ liệu tĩnh viết bằng TypeScript
│   ├── pixelMap.ts       # Bản đồ ánh xạ ID vật phẩm sang CDN
│   └── wikiData.ts       # Database búa, lõi ma pháp, nguyên liệu
├── guide/                # Các trang Markdown hướng dẫn plugins
├── wiki/                 # Các trang Markdown tra cứu vũ khí/lõi
├── utils/                # Các hàm tiện ích (Audio synthesizer)
└── index.md              # Trang chủ (nhúng LandingPage component)
```

---

## 🚀 Khởi Chạy Dự Án

Dự án sử dụng gói quản lý thư viện **pnpm**. Đảm bảo bạn đã cài đặt Node.js (phiên bản v18 trở lên).

### 1. Cài đặt các thư viện phụ thuộc:
```bash
pnpm install
```

### 2. Khởi động môi trường phát triển (Dev Server):
```bash
pnpm dev
```
Trang web sẽ chạy tại địa chỉ: [http://localhost:5173](http://localhost:5173)

### 3. Biên dịch dự án tĩnh (Production Build):
```bash
pnpm run build
```
Thành phẩm HTML/CSS tĩnh sẽ được xuất ra thư mục `src/.vitepress/dist/` sẵn sàng deploy lên Vercel, Netlify hoặc GitHub Pages.

### 4. Deploy Netlify:
Repo đã có sẵn `netlify.toml` với cấu hình:
- **Build command**: `npm run build`
- **Publish directory**: `src/.vitepress/dist`

---

## 📚 Tài Liệu Cho Nhà Phát Triển (Developer docs)

Tài liệu thiết kế kiến trúc và hướng dẫn đóng góp code chi tiết dành cho các lập trình viên nằm trong thư mục `.docs/`:
- [Kiến Trúc Dự Án & Cách Mở Rộng](file:///.docs/ARCHITECTURE.md)
- [Quy Trình Phát Triển & Quy Định Code](file:///.docs/DEVELOPMENT_GUIDE.md)
