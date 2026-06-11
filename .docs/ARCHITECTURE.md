# Kiến Trúc Dự Án & Hướng Dẫn Mở Rộng (Architecture & Extension Guide)

Tài liệu này dành cho các Senior Developer để hiểu cách thiết kế hệ thống, luồng dữ liệu và phương pháp mở rộng tính năng của dự án Wiki Hội Hè SMP.

---

## 🏛️ 1. Cấu Trúc Thành Phần & Luồng Dữ Liệu (Data Flow)

Dự án tuân thủ nguyên lý **Clean Architecture** và tách biệt rõ ràng giữa lớp dữ liệu (Data Layer), lớp logic (Core Utilities) và lớp hiển thị (Presentation Layer).

```text
[Data Layer]                 [Core Utilities]            [Presentation Layer]
data/wikiData.ts     ───┐                                 
data/pixelMap.ts     ───┼──> components/PixelIcon.vue  ──> wiki/mace-exclusive.md
                        └──> utils/audio.ts           ──> components/LandingPage.vue
```

### Lớp Dữ Liệu (Data Layer)
- **`data/wikiData.ts`**: Nơi lưu trữ toàn bộ thông tin của Wiki. Dữ liệu được định kiểu rõ ràng bằng TypeScript `interface` (`Weapon`, `Core`, `Material`, `Recipe`, v.v.). Không chứa bất kỳ logic React/Vue nào để đảm bảo tính độc lập.
- **`data/pixelMap.ts`**: Chứa ánh xạ từ `itemId` (định danh nội bộ của vật phẩm) sang tên file PNG chính thức trên CDN và cấu hình màu sắc ánh tím phù phép (Glow Color).

### Lớp Giao Diện (Presentation Layer)
- **`components/PixelIcon.vue`**: Nhận `itemId`, truy cập `pixelMap.ts` để lấy link CDN của hình ảnh PNG gốc tương ứng từ jsDelivr.
- **`components/CraftingGrid.vue`**: Nhận cấu trúc công thức `Recipe` từ `wikiData.ts` và render lưới 3x3 chứa các `PixelIcon`. Khi có tương tác chạm (Click/Touch), nó sẽ emit sự kiện lên trang cha để mở Drawer/Modal hiển thị chi tiết vật phẩm.
- **`components/MinecraftText.vue`**: Phục vụ việc parse mã màu Minecraft (`&a`, `&b`, v.v.) động sang thẻ HTML có style phù hợp.

---

## 🚀 2. Hướng Dẫn Mở Rộng (How to Extend)

### A. Thêm một Vũ Khí Custom mới
Để thêm một vũ khí mới (ví dụ: Cung Băng Giá - `frost_bow`), hãy làm theo 3 bước sau:

1. **Đăng ký vật phẩm trong CDN Map**:
   Mở file [data/pixelMap.ts](file:///b:/__JAVA__/hoiihesmp-web/data/pixelMap.ts), thêm định nghĩa cho `frost_bow`:
   ```typescript
   export const itemAssetMap: Record<string, ItemAsset> = {
     // ...
     frost_bow: { 
       cdnName: "bow_pulling_2", // Tên file PNG gốc của Minecraft trên CDN
       displayName: "Cung Băng Giá",
       glowColor: "rgba(85, 255, 255, 0.4)" // Màu lấp ánh xanh băng
     }
   };
   ```

2. **Thêm dữ liệu vũ khí**:
   Mở [data/wikiData.ts](file:///b:/__JAVA__/hoiihesmp-web/data/wikiData.ts). Tùy thuộc vào việc vũ khí đó là Mace hay vũ khí thường, thêm vào mảng `maceWeapons` hoặc `customWeapons`:
   ```typescript
   export const customWeapons: Weapon[] = [
     // ...
     {
       id: "frost_bow",
       name: "Cung Băng Giá",
       enName: "Frost Bow",
       badge: "🏹",
       colorClass: "border-[#55ffff]",
       cmd: 6001,
       singleton: true,
       desc: "Cung thần đúc từ băng vĩnh cửu tại nóc núi tuyết, bắn ra mũi tên làm đóng băng mục tiêu.",
       tooltip: "&b&lFrost Bow|&7A frozen bow that slows down hit targets.||&6⚡ Active — Freezing Arrow:|&fNgồi + Bắn trúng. Đóng băng mục tiêu trong 3 giây. (Hồi chiêu 15s)||&a⭐ Passive — Frostbite:|&fĐòn đánh thường áp Slowness I trong 2 giây.",
       recipe: {
         shape: [
           ["", "S", "I"],
           ["S", "", "I"],
           ["", "S", "I"]
         ],
         ingredients: {
           S: { name: "Stick", itemId: "stick", tooltip: "&fStick|&7Gậy gỗ." },
           I: { name: "Ice Block", itemId: "packed_ice", tooltip: "&bPacked Ice|&7Khối băng nén." }
         }
       }
     }
   ];
   ```

3. **Cập nhật hiển thị**:
   VitePress sẽ tự động biên dịch và cập nhật giao diện mà không cần cấu hình thêm gì!

---

## ⚡ 3. Các Phương Pháp Tối Ưu Hóa Hiệu Năng (Performance Tuning)

### Giải quyết vấn đề Lag của Bàn Chế Tạo (Crafting Grid)
Trong phiên bản cũ, mỗi item được vẽ bằng 256 phần tử DOM độc lập (lưới 16x16). Khi hiển thị đồng thời nhiều bàn chế tạo và danh sách vũ khí lớn, trình duyệt phải render hàng ngàn node DOM, gây ra hiện tượng giật lag khi di chuột (hover).
- **Giải pháp mới**: Thay thế hoàn toàn bằng một thẻ `<img>` đơn nhất lấy ảnh PNG từ CDN jsDelivr.
- **Tối ưu hóa Mask Shimmer**: Lớp hiệu ứng lấp lánh (Enchanted Glow) sử dụng thuộc tính CSS `mask-image` trỏ tới chính URL ảnh PNG của vật phẩm đó. Nhờ đó, trình duyệt tận dụng tối đa GPU để render hiệu ứng lấp lánh khớp với biên độ của hình ảnh mà không cần thêm bất kỳ node DOM phụ trợ nào.

### Web Audio API Synthesizer
Để tránh việc tải các file âm thanh `.mp3` cồng kềnh từ server (gây chậm mạng và tốn tài nguyên), dự án sử dụng bộ dao động sóng âm của HTML5 Web Audio API:
- **Click gỗ**: Kết hợp bộ tạo sóng Sine (`sine`) quét nhanh tần số từ `140Hz` xuống `60Hz` trong `0.04s` với Gain Node tắt dần lũy thừa.
- **Mở rương**: Sử dụng hai bộ tạo sóng tam giác (`triangle`) chạy lệch nhau `0.04s` để giả lập tiếng kêu lách cách của khớp gỗ và tiếng cọ xát bản lề rương Minecraft.

### Hình Nền Mờ (Blurred Wallpaper Background)
Để đảm bảo website hiển thị hình ảnh lung linh của server Minecraft mà không gây ảnh hưởng tới hiệu năng và khả năng đọc chữ:
- Sử dụng thuộc tính `fixed` cho ảnh nền (`background-attachment: fixed`), ngăn trình duyệt phải tính toán vẽ lại ảnh nền lớn khi người dùng cuộn chuột.
- Áp dụng bộ lọc `backdrop-filter: blur(8px)` và lớp màu phủ tối `linear-gradient` giúp giảm độ tương phản của ảnh nền, tăng độ tương phản của các khối chữ và panel thông tin chính.

### Google Fonts Preconnect
Để tối ưu hóa thời gian tải font chữ (Outfit, VT323, Inter) và loại bỏ hiện tượng giật font khi tải trang (FOUC):
- Các thẻ `<link rel="preconnect" ...>` được chèn trực tiếp vào phần cấu hình `head` của VitePress, giúp trình duyệt mở kết nối TCP/TLS đến Google CDN từ trước khi tải file CSS.

### Đồng bộ Phong cách Khối Hộp (Blocky UI)
- Áp dụng triết lý thiết kế Minecraft bằng cách loại bỏ hầu hết các lớp bo tròn góc (`rounded-none`). Điều này vừa giúp UI trông đồng điệu, cứng cáp và chuẩn phong cách pixel-art của Minecraft, vừa giảm tải các tính toán vẽ đường cong (border-radius) của GPU trình duyệt.
