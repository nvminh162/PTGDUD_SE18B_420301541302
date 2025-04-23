## Nguyen Van Minh - 22003405 - Tuan 09

## Nhom TH: GV Tu Thi Xuan Hien

🧩 1. Counter App (Đếm số đơn giản)
Tạo một state đếm (count)
Thêm 2 nút: Tăng và Giảm
Sử dụng createSlice để tạo các action: increment, decrement

📋 2. To-do List
State là danh sách các công việc (todos)
Action: addTodo, toggleTodo, removeTodo
Hiển thị danh sách và thêm/xoá công việc

🔁 3. Toggle Theme (Dark/Light mode)
State: theme (light / dark)
Action: toggleTheme
Áp dụng theme cho giao diện bằng CSS class hoặc style

📦 4. Giỏ hàng (Shopping Cart)
State: cartItems (mảng sản phẩm)
Action: addItem, removeItem, updateQuantity
Tính tổng số lượng và tổng tiền

🎯 5. Quản lý user đăng nhập (Auth)
State: user, isLoggedIn
Action: login, logout, setUserInfo
Hiển thị giao diện đăng nhập / chào mừng người dùng sau khi đăng nhập

6. Đồng bộ dữ liệu từ API (Async Thunk)
Dùng createAsyncThunk để gọi API (ví dụ: lấy danh sách user từ JSONPlaceholder)
State: users, status, error
Action: fetchUsers

🔄 7. Counter nâng cao có reset và tăng theo step
Thêm nút reset, incrementByAmount
Người dùng có thể nhập số để tăng theo ý muốn

🧮 8. Form tính toán đơn giản (BMI, thuế...)
State chứa dữ liệu form và kết quả
Action: updateInput, calculateResult

📅 9. Quản lý sự kiện (Event Management)
State: events (mảng chứa thông tin sự kiện)
Action: addEvent, editEvent, deleteEvent
Thêm form để thêm/sửa thông tin

🔐 10. Kết hợp nhiều slice và store
Tạo nhiều slice: authSlice, cartSlice, productSlice
Combine các slice trong configureStore
Sử dụng trong nhiều component khác nhau