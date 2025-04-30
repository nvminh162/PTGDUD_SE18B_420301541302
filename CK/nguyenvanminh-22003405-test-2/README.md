Nội dung:
• Redux Tool kit React Router
• Tailwind CSS Hooks
• Custom Hook
• Fetch API
• Json server để tạo API
Bài ôn:
1. Xây dựng một ứng dụng quản lý sản phẩm (Product Management App) với các chức
năng sau:
Giao diện & Routing (React Router + Tailwind CSS)
Trang chính /:
• Hiển thị danh sách sản phẩm từ API (/products)
• Mỗi sản phẩm hiển thị: tên, giá, mô tả ngắn, ảnh (nếu có)
• Có nút “Chi tiết” → điều hướng đến /product/:id
Trang chi tiết /product/:id:
• Hiển thị đầy đủ thông tin của 1 sản phẩm
• Có nút “Quay lại”
Trang thêm mới /add:
• Form thêm sản phẩm mới với các trường: name, price, description
• Gửi dữ liệu lên JSON Server (POST)
• Điều hướng về trang / sau khi thêm thành công
Trang chỉnh sửa /edit/:id:
• Form cập nhật sản phẩm
• Load dữ liệu sản phẩm theo ID và cho phép cập nhật (PUT)
• Quay lại / sau khi cập nhật thành công
2. Quản lý trạng thái với Redux Toolkit
• Thiết lập store với @reduxjs/toolkit
• Quản lý danh sách sản phẩm bằng slice (productSlice)
• Thực hiện gọi API bằng createAsyncThunk
• State gồm: danh sách sản phẩm, trạng thái tải (loading), và thông báo lỗi (nếu có)
3. Hooks & Custom Hook
• Tạo một custom hook useFetch để tái sử dụng logic gọi API cho việc fetch data.
• Custom hook cần:
o Nhận URL
o Trả về data, loading, error
4. Gọi API với Fetch
• Sử dụng fetch để thực hiện các thao tác: GET, POST, PUT, DELETE đến
http://localhost:3000/products
5. Sử dụng JSON Server
• Tạo file db.json chứa mẫu dữ liệu ban đầu:
6. Bonus (Tùy chọn nếu còn thời gian)
• Tính năng xóa sản phẩm
• Hiển thị thông báo (success/error) khi thêm/sửa/xóa
• Responsive giao diện bằng TailwindCSS
• Loading Spinner khi gọi API
Cấu trúc thư mục theo ảnh tôi gửi

Yêu cầu khác:
- Sử dụng Base64 để mã hóa ảnh và lưu trực tiếp vào JSON Server, trong lúc thêm ảnh có thể không thêm ảnh sẽ hiện ảnh mặc định trong assets (placeholder.png) dùng trực tiếp ảnh trong source code nếu không upload
- Hãy dùng tailwindCSS, tôi đã cài tailwindcss 4.0 bạn ko cần phải setup gì nữa (giữa nguyên file index.css), trong quá trình làm nếu cần cài gì hãy giúp tôi cài thêm và thực hiện đúng yêu cầu, tạo chia cấu trúc thư mục hợp lý hãy code đúng cấu trúc thư mục tôi cung cấp và thực hiện đúng yêu cầu đề bài
- Nếu có tiền tệ hãy dùng đơn vị VNĐ
- Sử dụng thư viện React-Toastify để thông báo
- Tuân thủ cấu trúc để yêu cầu

Kiểm tra thực hiện đúng yêu cầu đề bài