# Hướng Dẫn Phát Triển (Development & Contribution Guide)

Tài liệu này hướng dẫn quy trình làm việc, thiết lập môi trường phát triển và các quy định viết mã nguồn (Coding Conventions) của dự án.

---

## 🛠️ 1. Thiết Lập Môi Trường (Setup)

Dự án yêu cầu **Node.js (v18+)** và trình quản lý thư viện **pnpm**.

```bash
# 1. Clone dự án và truy cập thư mục gốc
cd hoiihesmp-web

# 2. Cài đặt các gói phụ thuộc
pnpm install

# 3. Chạy server phát triển (Dev Mode)
pnpm dev

# 4. Kiểm tra build sản phẩm (Build Production)
pnpm run build
```

---

## 📝 2. Quy Định Viết Code (Coding Conventions)

### Khai báo Kiểu dữ liệu (TypeScript Type Safety)
- Toàn bộ dữ liệu hoặc logic bổ sung đều phải được viết trong các file `.ts`.
- Mọi dữ liệu mới thêm vào [data/wikiData.ts](file:///b:/__JAVA__/hoiihesmp-web/data/wikiData.ts) phải tuân thủ nghiêm ngặt các `interface` đã định nghĩa sẵn.
- Tránh sử dụng kiểu `any`. Hãy định nghĩa cụ thể kiểu dữ liệu để tăng khả năng tự động hoàn thành (autocomplete) của IDE.

### Đặt Tên File & Component (Naming Conventions)
- **Tên Component Vue**: Sử dụng chuẩn **PascalCase** (ví dụ: `PixelIcon.vue`, `CraftingGrid.vue`).
- **Tên File Dữ liệu / Script**: Sử dụng chuẩn **camelCase** (ví dụ: `wikiData.ts`, `pixelMap.ts`, `audio.ts`).
- **Tên Thư mục**: Sử dụng chuẩn viết thường/kết nối bằng gạch ngang (ví dụ: `components/`, `data/`, `.vitepress/`).

### Viết JSX/HTML trong Vue Template
- Sử dụng thuộc tính `:` viết tắt cho `v-bind` và `@` viết tắt cho `v-on`.
- Các sự kiện phát ra từ component con phải được khai báo rõ ràng bằng `defineEmits` kèm kiểu dữ liệu truyền đi.
- **Tránh unescaped entities**: Khi viết text chứa các ký tự đặc biệt như ngoặc kép `"`, dấu nháy đơn `'` hoặc dấu lớn hơn `>`, hãy sử dụng các ký tự thực thể HTML tương ứng (ví dụ: `&ldquo;`, `&rdquo;`, `&apos;`) để tránh lỗi biên dịch.

---

## 🔄 3. Quy Định Commit (Conventional Commits)

Mỗi commit đẩy lên Git cần tuân thủ cấu trúc Conventional Commit để dễ dàng quản lý lịch sử thay đổi:

```text
type(scope): description
```

### Các Loại Type Chấp Nhận:
- `feat`: Thêm tính năng mới (ví dụ: vũ khí mới, tab mới).
- `fix`: Sửa lỗi (ví dụ: lỗi layout di động, lỗi âm thanh).
- `docs`: Thay đổi hoặc thêm mới tài liệu (ví dụ: cập nhật README, viết hướng dẫn).
- `style`: Định dạng mã nguồn (khoảng trắng, dấu chấm phẩy, không ảnh hưởng logic).
- `refactor`: Tái cấu trúc mã nguồn (không thêm tính năng hay sửa lỗi).
- `chore`: Thay đổi quy trình build hoặc các công cụ phụ trợ (như cấu hình npm, gitignore).

### Ví dụ Hợp Lệ:
- `feat(wiki): add mace of chaos crafting grid`
- `fix(audio): bypass ios web audio autoplay restriction`
- `docs(readme): update build instructions for pnpm`
