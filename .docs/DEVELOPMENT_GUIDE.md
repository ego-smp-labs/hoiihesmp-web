# 📝 Hướng Dẫn Quy Trình Phát Triển & Quy Định Viết Code (Development Workflow & Coding Standards)

Tài liệu này định nghĩa quy trình làm việc, thiết lập môi trường phát triển cục bộ (local environment), các quy chuẩn viết mã nguồn (Coding Conventions) và quy tắc kiểm thử bắt buộc đối với mọi lập trình viên khi tham gia đóng góp cho dự án **Hội Hè SMP Wiki**.

---

## 🛠️ 1. Khởi Tạo Môi Trường Cục Bộ (Setup)

Dự án sử dụng **Node.js (v18+)** và trình quản lý gói **pnpm** (nhằm tối ưu hóa tốc độ cài đặt và quản lý node_modules dùng chung).

```bash
# 1. Clone mã nguồn về máy cục bộ
git clone https://github.com/nhatthang/hoiihesmp-web.git
cd hoiihesmp-web

# 2. Cài đặt các gói phụ thuộc với pnpm
pnpm install

# 3. Chạy Server phát triển (Local Hot-Reload)
pnpm dev

# 4. Biên dịch thử nghiệm (Production-ready build check)
pnpm run build
```

Sau khi chạy lệnh `pnpm dev`, dự án sẽ chạy tại địa chỉ mặc định `http://localhost:5173`.

---

## 📐 2. Quy Định Viết Code (Coding Standards)

Để giữ cho codebase luôn sạch sẽ, dễ bảo trì và tránh các lỗi biên dịch hoặc runtime không đáng có, các lập trình viên cần tuân thủ nghiêm ngặt các quy tắc dưới đây.

### 2.1. Đảm Bảo An Toàn Kiểu Dữ Liệu (TypeScript Type Safety)
- **Không sử dụng kiểu `any`:** Việc sử dụng `any` làm triệt tiêu sức mạnh kiểm soát lỗi tĩnh của TypeScript. Trong trường hợp dữ liệu phức tạp chưa rõ ràng cấu trúc, hãy khai báo `unknown` hoặc thiết kế một `interface` tương ứng.
- **Khai báo kiểu tường minh cho Vue Props/Emits:**
  - Sử dụng `<script setup lang="ts">` kết hợp với cú pháp `defineProps<Props>()` và `defineEmits<Emits>()`.
  - Luôn cung cấp giá trị mặc định bằng cách dùng hàm `withDefaults` thay vì khai báo tùy chọn.

### 2.2. Quy Tắc Đặt Tên (Naming Conventions)
- **Vue Components:** Đặt tên theo chuẩn **PascalCase** (ví dụ: `PixelIcon.vue`, `CraftingGrid.vue`). Tên component phải có độ dài tối thiểu 2 từ để tránh xung đột với các thẻ HTML chuẩn.
- **Scripts & Data Files:** Đặt tên theo chuẩn **camelCase** (ví dụ: `wikiData.ts`, `pixelMap.ts`, `audio.ts`).
- **Styles & CSS Classes:** Sử dụng CSS utility của Tailwind CSS v4 hoặc viết CSS Modules theo chuẩn **kebab-case** nếu cần custom đặc thù.

### 2.3. Quy Tắc Template & HTML Escaping
- Tránh viết text thô chứa các ký tự đặc biệt như dấu nháy đơn (`'`), nháy kép (`"`), hoặc dấu lớn/bé (`<`/`>`) trong Vue Template.
- Hãy dùng các thực thể ký tự HTML tương ứng để tránh lỗi render của parser:
  - Dùng `&ldquo;` và `&rdquo;` cho dấu ngoặc kép `"`.
  - Dùng `&apos;` cho dấu nháy đơn `'`.
  - Dùng `&lt;` và `&gt;` cho dấu so sánh.

---

## 🧱 3. Áp Dụng SOLID & OOP Vào Phát Triển Giao Diện

Chúng ta áp dụng các nguyên lý SOLID kinh điển vào cấu trúc component Vue 3:

1.  **Single Responsibility (SRP):**
    - Mỗi component Vue chỉ làm đúng một việc hiển thị một phần tử giao diện.
    - Ví dụ: `PixelIcon.vue` chịu trách nhiệm render ảnh và hiệu ứng lấp lánh; `CraftingGrid.vue` chịu trách nhiệm hiển thị ma trận 3x3 và sự kiện nhấn chuột; logic xử lý phát âm thanh được đưa vào lớp tiện ích riêng `src/utils/audio.ts` chứ không lồng ghép trong component giao diện.
2.  **Open/Closed (OCP):**
    - Tránh việc chỉnh sửa cấu trúc bên trong các component lõi để thêm tính năng. Thay vào đó, hãy sử dụng **Vue Slots** hoặc truyền cấu hình thông qua **Props** để mở rộng hành vi của component từ bên ngoài.
3.  **Interface Segregation (ISP):**
    - Thiết kế các interface prop gọn nhẹ. Component con không nên nhận vào một object cha khổng lồ chứa hàng chục thuộc tính dư thừa nếu nó chỉ thực sự sử dụng 2 hoặc 3 trường dữ liệu.

---

## 🔄 4. Quy Chuẩn Commit (Conventional Commits)

Dự án áp dụng quy chuẩn Conventional Commit để tự động hóa việc xuất Changelog và quản lý lịch sử Git mạch lạc. Mỗi thông điệp commit phải viết bằng tiếng Anh, tuân thủ cấu trúc sau:

```text
type(scope): description
```

### 4.1. Các loại Type hợp lệ:
*   `feat`: Thêm tính năng hiển thị hoặc dữ liệu vũ khí mới.
*   `fix`: Sửa lỗi giao diện, căn chỉnh CSS, lỗi âm thanh hoặc TypeScript.
*   `docs`: Cập nhật tài liệu kỹ thuật trong `.docs/` hoặc file `README.md`.
*   `refactor`: Cơ cấu lại mã nguồn, chia nhỏ component (không làm thay đổi tính năng).
*   `chore`: Thay đổi file cấu hình build, cấu hình npm, hoặc các tác vụ DevOps.

### 4.2. Ví dụ cụ thể:
- `feat(wiki): add glitch clock material and update chronos recipe`
- `fix(ui): resolve clipping issue on mobile drawer modal`
- `docs(arch): add data flow diagram and maintenance checklist`

---

## ✅ 5. Quy Trình Kiểm Thử & Chấp Thuận (Verification Check)

Trước khi gửi Pull Request (PR) lên branch chính, lập trình viên bắt buộc phải tự chạy kiểm tra cục bộ:

1.  **Kiểm tra TypeScript & Linter:** Đảm bảo không có bất kỳ cảnh báo đỏ nào của TypeScript compiler trong VS Code/IDE.
2.  **Kiểm tra Build tĩnh:**
    ```bash
    pnpm run build
    ```
    Lệnh này chạy trình kiểm tra liên kết chết (dead link check) và biên dịch mã nguồn Vue sang HTML/JS tĩnh. Quá trình build phải hoàn tất với mã thoát `0` (Success).
3.  **Kiểm thử thủ công (Manual Verification):**
    - Kiểm tra độ tương thích trên thiết bị di động (Responsive Design).
    - Kiểm tra âm thanh click và hiệu ứng phù phép (glow) hoạt động bình thường trên cả Safari (iOS), Chrome, và Firefox.
