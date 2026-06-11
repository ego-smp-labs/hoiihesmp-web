# Hướng Dẫn Chi Tiết Plugin ValhallaMMO

**ValhallaMMO** biến Minecraft sinh tồn truyền thống thành một tựa game nhập vai sinh động (RPG). Hệ thống cung cấp các cây kỹ năng (Skill Tree), điểm kinh nghiệm nghề nghiệp và khả năng đúc trang bị có phẩm chất (Quality) vượt trội.

---

## 📈 1. Hệ Thống Cây Kỹ Năng (Skill Trees)

Khi thực hiện các hoạt động sinh tồn thường ngày, bạn sẽ nhận được điểm kinh nghiệm kỹ năng tương ứng. Khi lên cấp, bạn nhận được **Điểm Kỹ Năng (Skill Points)** để mở khóa các nút bổ trợ trong lệnh `/skills`.

### Các Nhóm Kỹ Năng Chính
- **Khai Thác Mỏ (Mining)**: 
  - *Cách tăng*: Đào đá, quặng.
  - *Hiệu quả*: Tăng tốc độ đào, tăng tỉ lệ nhân đôi quặng rơi ra, mở khóa kỹ năng đập nổ quặng diện rộng (Vein Mining).
- **Rèn Đúc (Smithing)**:
  - *Cách tăng*: Chế tạo giáp, vũ khí tại đe rèn, nung quặng.
  - *Hiệu quả*: Tăng phẩm chất (Quality) đồ rèn ra, giảm hao hụt nguyên liệu, mở khóa khả năng đập búa đúc lại trang bị cũ.
- **Luyện Kim (Alchemy)**:
  - *Cách tăng*: Pha chế thuốc, nung nguyên liệu cất dược.
  - *Hiệu quả*: Mở khóa các loại thuốc độc quyền, tăng thời gian tác dụng của thuốc, pha chế thuốc dạng xịt hoặc bom khói diện rộng.
- **Chiến Đấu (Combat)**: Chia làm Vũ khí nhẹ (Light Weapons), Vũ khí nặng (Heavy Weapons) và Bắn cung (Archery).
  - *Cách tăng*: Tấn công quái vật và người chơi khác.
  - *Hiệu quả*: Tăng sát thương chí mạng, tăng cơ hội né đòn, giảm thời gian hồi đòn đánh cận chiến.

---

## ⚒️ 2. Hệ Thống Phẩm Chất Trang Bị (Item Quality)

Đây là tính năng cốt lõi của ValhallaMMO giúp phân cấp trình độ giữa một thợ rèn tập sự và một đại sư rèn đúc.

### Cách Hoạt Động Của Item Quality
- Khi bạn chế tạo một công cụ hoặc giáp sắt/kim cương/netherite, hệ thống sẽ tính toán **Smithing Level** của bạn để cho ra chỉ số **Phẩm chất (Quality)** từ 1% đến 100% (hiển thị dưới dạng số sao từ 1⭐ đến 5⭐ trên lore trang bị).
- **Trang bị phẩm chất cao** sẽ có:
  - Lượng giáp cộng thêm dày hơn (Armor & Armor Toughness cao hơn đồ thường).
  - Tốc độ tấn công của vũ khí nhanh hơn, sát thương cơ bản lớn hơn.
  - Độ bền (Durability) tăng gấp 2 - 3 lần trang bị gốc.
  - Tăng khả năng cường hóa (Enchantability) khi đưa vào bàn phù phép.

---

## 🧪 3. Pha Chế Thuốc Nâng Cao (Custom Alchemy)

ValhallaMMO cung cấp một bảng công thức pha chế thuốc phong phú vượt ra ngoài giới hạn của Minecraft Vanilla.

### Các Hiệu Ứng Thuốc Độc Quyền
- **Kháng Hiệu Ứng (Resistance)**: Giảm thời gian chịu tác động của các trạng thái tiêu cực như Độc, Wither, Chậm chạp.
  - *Thành phần rèn*: Kết hợp nước mắt Ghast và đá phát sáng chưng cất.
- **Cường Hóa Thuộc Tính (Buff Potions)**: Tăng tốc độ hồi phục năng lượng, tăng tốc chạy tối đa hoặc tăng tầm đánh cận chiến thêm 1-2 khối.
- **Bom Thuốc Độc (Chemical Bombs)**: Thuốc ném khi tiếp đất sẽ tạo ra một vùng khí độc tồn tại trong 10-20 giây, gây sát thương liên tục cho bất kỳ sinh vật nào đi vào.

---

## 💻 Các Lệnh Hữu Ích Cần Nhớ
- `/skills`: Mở giao diện menu cây kỹ năng chính để nâng điểm.
- `/skills profile <Tên>`: Xem hồ sơ cấp độ kỹ năng của một người chơi khác.
- `/valhalla recipes`: Tra cứu toàn bộ công thức chế tạo đặc thù của plugin này.
