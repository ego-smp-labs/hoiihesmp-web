# Hướng Dẫn ValhallaMMO: Gói Nội Dung Cổ Điển (Classic)

**ValhallaMMO** biến Minecraft sinh tồn truyền thống thành một tựa game nhập vai sinh động (RPG). Trong Season 4, máy chủ sử dụng **Gói nội dung Cổ điển (Classic Content Package)** làm cốt lõi để duy trì tính cân bằng nguyên bản của game trong khi bổ sung các cơ chế rèn đúc chuyên sâu.

---

## ⚒️ 1. Cơ Chế Rèn Đúc Cổ Điển (Smithing Progression)

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

## ⭐ 2. Phẩm Chất Trang Bị & Bảng Ngọc Kỹ Năng

### Chỉ Số Phẩm Chất (Item Quality)
- Khi chế tạo dụng cụ, vũ khí hoặc giáp, hệ thống tự động tính toán cấp độ Rèn để cho ra **Chỉ số Phẩm chất (Quality)** từ 1% đến 100% (hiển thị bằng số sao từ 1⭐ đến 5⭐ trên lore trang bị).
- **Trang bị phẩm chất cao** sẽ được cộng thêm:
  - Chỉ số Giáp & Độ dẻo dai giáp (Armor & Armor Toughness) cao hơn đồ thường.
  - Sát thương cơ bản lớn hơn và tốc độ đánh nhanh hơn.
  - Độ bền tăng gấp 1.5x - 3x lần trang bị gốc.

### Mở Khóa Công Thức Rèn Kim Cương Sớm
Mặc dù công thức rèn Kim Cương yêu cầu level Rèn 60, bạn vẫn có thể mở khóa sớm bằng cách:
- Đạt **Level 40 Smithing**.
- Sử dụng bảng ngọc `/skills` để nâng điểm mở khóa nhánh kỹ năng **Blacksmith (Thợ Rèn Chuyên Nghiệp)**. Nhánh này cho phép bạn chế tạo đồ kim cương ở chất lượng bình thường ngay lập tức mà không bị phạt độ bền.

---

## 📈 3. Cách Tăng Cấp Rèn Nhanh (Levelling Strategy)

1. **Luyện cấp theo bậc**: Đừng vội rèn đồ đắt tiền. Hãy tập trung chế tạo số lượng lớn công cụ gỗ/da thuộc ở level thấp, sau đó chuyển dần sang sắt khi đạt level 40.
2. **Cơ chế Cộng dồn Sát thương (EXP Multiplier)**:
   - Hệ thống của ValhallaMMO theo dõi độ bền bị tiêu hao của các trang bị bạn sử dụng.
   - Khi bạn làm hỏng hoặc dùng mòn một trang bị nào đó, lượng kinh nghiệm tích lũy từ hao mòn đó sẽ được cộng dồn thành **Hệ số nhân kinh nghiệm (EXP Multiplier)** cho lần chế tạo tiếp theo của loại trang bị đó.
   - *Mẹo*: Hãy dùng hỏng các dụng cụ sắt trước khi rèn đồ sắt mới để nhận lượng EXP khổng lồ!

---

## 💻 Các Lệnh Rèn & Kỹ Năng Hữu Ích
- `/skills`: Mở giao diện cây kỹ năng nghề Rèn để nâng điểm nhánh *Smithing*.
- `/valhalla recipes`: Tra cứu chi tiết toàn bộ điều kiện cấp độ và nguyên liệu cho từng công thức rèn trong plugin.
