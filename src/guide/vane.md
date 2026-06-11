# Hướng Dẫn Plugin Vane & Vật Phẩm QoL

**Vane** là một hệ thống plugin cải tiến trải nghiệm sinh tồn Minecraft (Vanilla-like) vô cùng mạnh mẽ. Plugin này bổ sung nhiều tính năng hữu ích mà không làm mất đi tính chất nguyên bản của trò chơi, đặc biệt là các công cụ hỗ trợ chất lượng cuộc sống (Trifles).

---

## 🌾 1. Công Cụ & Tiện Ích Mới (Vane Trifles)

Dưới đây là cẩm nang tra cứu và tìm kiếm nhanh các vật phẩm tùy biến của **Vane Trifles** đang hoạt động trên máy chủ. Bạn có thể sử dụng ô tìm kiếm để tra nhanh công năng hoặc công thức rèn lưới 3x3 tương ứng:

<VaneTrifles />

---

## 🌀 2. Cổng Dịch Chuyển Tự Chế (Vane Portals)

Người chơi có thể tự xây dựng các cổng dịch chuyển cá nhân hoặc công cộng để liên kết các khu vực ở khoảng cách xa mà không cần lệnh admin.

### Cách Xây Dựng Cổng
1. Xây một khung hình chữ nhật đứng bằng **Hắc Diện Thạch (Obsidian)** (kích thước tối thiểu 2x3 khoảng trống bên trong, tương tự cổng Nether).
2. Đặt một **Khối Đá Đỏ (Redstone Block)** làm nền ở ngay dưới lòng cổng.
3. Cầm **Bột Đá Đỏ (Redstone Dust)** chuột phải vào khung Obsidian. Khung cổng sẽ được kích hoạt và xuất hiện làn sương ma thuật.

### Cách Liên Kết Cổng
- Sử dụng **Ngọc Ender (Ender Pearl)**: Chuột phải vào cổng thứ nhất để lấy tọa độ liên kết, sau đó mang viên ngọc đó chuột phải vào cổng thứ hai để kết nối chúng lại với nhau.
- Đi vào cổng này sẽ dịch chuyển bạn tức thời sang cổng kia.

---

## 📬 3. Hòm Thư Chuyển Phát (Vane Mailboxes)

Không cần phải đi bộ hàng ngàn khối để trao đổi vật phẩm, bạn có thể gửi thư và hàng hóa thông qua hòm thư chuyển phát nhanh.

### Cách Chế Tạo & Đặt Hòm Thư
- Chế tạo một **Hòm Thư (Mailbox)** bằng rương gỗ kết hợp với một thỏi đồng/sắt.
- Đặt hòm thư ngoài đất và sử dụng lệnh `/mailbox register <Tên_Hòm_Thư>` để đăng ký nó vào mạng lưới bưu chính của server.

### Cách Gửi Đồ
- Chuột phải vào hòm thư bất kỳ, giao diện bưu điện sẽ mở ra.
- Nhập tên người nhận hoặc chọn hòm thư công cộng trong danh sách.
- Đặt vật phẩm muốn gửi vào các ô trống và nhấn **Gửi**. Người nhận sẽ nhận được thông báo bưu phẩm và chỉ cần ra hòm thư của mình để lấy đồ.

---

## 🛡 4. Hệ Thống Bảo Vệ Đất Đai (Vane Regions)

Mỗi member đều có quyền bảo vệ nhà cửa và công trình của mình tránh khỏi việc bị phá hoại hoặc ăn trộm (griefing).

### Lệnh Claim Đất
- `/region create <Tên_Khu_Vực>`: Tạo một vùng claim bảo vệ xung quanh vị trí bạn đang đứng (bán kính claim mặc định sẽ tiêu tốn ngọc lục bảo hoặc vàng tùy cấu hình server).
- `/region addmember <Khu_Vực> <Tên_Người_Chơi>`: Cho phép bạn bè cùng xây dựng trong vùng đất của bạn.
- `/region list`: Hiển thị tất cả các vùng đất bạn đang sở hữu.
