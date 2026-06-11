# Hướng Dẫn ValhallaMMO: Gói Nội Dung Cổ Điển (Classic)

**ValhallaMMO** biến Minecraft sinh tồn truyền thống thành một tựa game nhập vai sinh động (RPG). Trong Season 4, máy chủ sử dụng **Gói nội dung Cổ điển (Classic Content Package)** làm cốt lõi để duy trì tính cân bằng nguyên bản của game trong khi bổ sung các cơ chế rèn đúc chuyên sâu.

---

## 🧭 Tổng Quan Nhanh

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <div class="mc-dark-panel p-4 border-l-4 border-l-[#ffaa00]">
    <strong class="text-white">/skills</strong>
    <p class="text-sm text-[#b7a9ca] mt-2">Mở bảng kỹ năng RPG để xem cấp nghề, EXP và nâng perk.</p>
  </div>
  <div class="mc-dark-panel p-4 border-l-4 border-l-[#55ffff]">
    <strong class="text-white">Smithing</strong>
    <p class="text-sm text-[#b7a9ca] mt-2">Nghề quan trọng nhất khi chế tạo giáp, vũ khí và dụng cụ chất lượng cao.</p>
  </div>
  <div class="mc-dark-panel p-4 border-l-4 border-l-[#ff55ff]">
    <strong class="text-white">Item Quality</strong>
    <p class="text-sm text-[#b7a9ca] mt-2">Cấp nghề ảnh hưởng trực tiếp tới độ bền, sát thương và chỉ số trang bị.</p>
  </div>
</div>

> [!TIP]
> Trước khi rèn đồ kim cương hoặc Netherite, hãy kiểm tra cấp **Smithing** trong `/skills`. Rèn vượt cấp có thể khiến trang bị bị phạt độ bền rất nặng.

---

## 📈 1. Bảng Kỹ Năng Nhập Vai (/skills)

ValhallaMMO dùng lệnh `/skills` làm trung tâm phát triển nhân vật. Đây là nơi bạn xem cấp nghề, EXP, điểm kỹ năng và các perk đang mở khóa.

### Cách Sử Dụng
1. Gõ `/skills` trong chat để mở giao diện kỹ năng.
2. Chọn nhánh nghề tương ứng với hoạt động bạn muốn phát triển: Mining, Farming, Smithing, Archery, Acrobatics, Fishing, v.v.
3. Khi đủ EXP, bạn sẽ nhận **Skill Points** hoặc **Gold Points** để mở các nút perk trong nhánh nghề.

### Nên Ưu Tiên Gì?
- Nếu bạn muốn tự rèn trang bị mạnh: ưu tiên **Smithing**.
- Nếu bạn thường đào tài nguyên: nâng **Mining** để cải thiện tốc độ và sản lượng.
- Nếu bạn PvP hoặc đi dungeon nhiều: cân nhắc các nhánh tăng sát thương, né tránh hoặc chống chịu.

---

## ⚒️ 2. Cơ Chế Rèn Đúc Cổ Điển (Smithing Progression)

Trong gói nội dung Classic, người chơi không thể ngay lập tức chế tạo các vũ khí/dụng cụ kim cương hay Netherite chất lượng cao. Hệ thống yêu cầu tích lũy cấp độ nghề Rèn để mở khóa và duy trì độ bền tối đa của trang bị.

### Bảng Phân Cấp Trình Độ Rèn (Smithing Levels)

Để rèn thành công trang bị đạt độ bền và chất lượng tốt, bạn cần đạt cấp độ Smithing tương ứng:

| Cấp Độ Rèn | Loại Trang Bị Mở Khóa | Ghi Chú |
| :--- | :--- | :--- |
| **0 – 20** | **Gỗ & Da Thuộc** (Wood & Leather) | Giai đoạn nhập môn, học cách đập búa đe. |
| **20 – 40** | **Đá & Giáp Xích** (Stone & Chainmail) | Rèn giáp xích bằng các vòng sắt lẻ. |
| **40 – 60** | **Sắt & Vàng** (Iron & Gold) | Đạt ngưỡng thợ rèn trung cấp. |
| **60+** | **Kim Cương & Netherite** (Diamond & Netherite) | Ngưỡng rèn bậc thầy, tối đa hóa chất lượng. |

> [!WARNING]
> **Hình phạt rèn vượt cấp (Under-leveled Penalty):**
> Nếu bạn cố tình chế tạo trang bị có cấp bậc cao hơn cấp độ Rèn hiện tại của mình (ví dụ: chế tạo kiếm Kim Cương khi chỉ mới đạt Level 10 Rèn), trang bị rèn ra sẽ bị **phạt độ bền cực nặng (chỉ còn tối đa 20% độ bền gốc)**, dễ dàng gãy vụn sau vài lần sử dụng.

---

## ⭐ 3. Phẩm Chất Trang Bị & Perk Smithing

### Chỉ Số Phẩm Chất (Item Quality)
- Khi chế tạo dụng cụ, vũ khí hoặc giáp, hệ thống tự động tính toán cấp độ Rèn để cho ra **Chỉ số Phẩm chất (Quality)** từ 1% đến 100% (hiển thị bằng số sao từ 1⭐ đến 5⭐ trên lore trang bị).
- **Trang bị phẩm chất cao** sẽ được cộng thêm:
  - Chỉ số Giáp & Độ dẻo dai giáp (Armor & Armor Toughness) cao hơn đồ thường.
  - Sát thương cơ bản lớn hơn và tốc độ đánh nhanh hơn.
  - Độ bền tăng gấp 1.5x - 3x lần trang bị gốc.

### Mở Khóa Công Thức Rèn Kim Cương Sớm
Mặc dù công thức rèn Kim Cương thường yêu cầu level Rèn cao, bạn có thể mở khóa sớm bằng cách:
- Đạt khoảng **Level 40 Smithing**.
- Vào `/skills`, chọn nhánh **Smithing** và nâng perk liên quan tới **Blacksmith/Thợ Rèn Chuyên Nghiệp** nếu server đang bật perk này.
- Kiểm tra lore hoặc thông báo craft sau khi rèn để chắc chắn trang bị không bị phạt chất lượng.

---

## 📈 4. Cách Tăng Cấp Rèn Nhanh (Levelling Strategy)

1. **Luyện cấp theo bậc**: Đừng vội rèn đồ đắt tiền. Hãy tập trung chế tạo số lượng lớn công cụ gỗ/da thuộc ở level thấp, sau đó chuyển dần sang sắt khi đạt level 40.
2. **Cơ chế Cộng dồn Sát thương (EXP Multiplier)**:
   - Hệ thống của ValhallaMMO theo dõi độ bền bị tiêu hao của các trang bị bạn sử dụng.
   - Khi bạn làm hỏng hoặc dùng mòn một trang bị nào đó, lượng kinh nghiệm tích lũy từ hao mòn đó sẽ được cộng dồn thành **Hệ số nhân kinh nghiệm (EXP Multiplier)** cho lần chế tạo tiếp theo của loại trang bị đó.
   - *Mẹo*: Hãy dùng hỏng các dụng cụ sắt trước khi rèn đồ sắt mới để nhận lượng EXP khổng lồ!

---

## 💻 Các Lệnh Rèn & Kỹ Năng Hữu Ích
- `/skills`: Mở giao diện cây kỹ năng nghề Rèn để nâng điểm nhánh *Smithing*.
- `/valhalla recipes`: Tra cứu chi tiết toàn bộ điều kiện cấp độ và nguyên liệu cho từng công thức rèn trong plugin.

---

## ✅ Checklist Trước Khi Rèn Đồ Đắt Tiền

- Mở `/skills` và kiểm tra cấp **Smithing** hiện tại.
- Đọc kỹ cảnh báo craft/lore sau khi chế tạo thử một món rẻ hơn.
- Không dùng kim cương/Netherite để luyện cấp khi chưa hiểu cơ chế phạt độ bền.
- Nếu cần đồ chiến đấu ngay, cân nhắc giao dịch với người chơi có Smithing cao hơn.
