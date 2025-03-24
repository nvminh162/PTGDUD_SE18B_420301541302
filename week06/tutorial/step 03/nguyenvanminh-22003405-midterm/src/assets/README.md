<!-- Huong dan cac buoc lam bai giua ky -->

<!-- 1. Thu vien can cai: -->
<!-- Trang huong dan cai -->
    npm install tailwindcss @tailwindcss/vite
    npm install react-router-dom
    
<!-- 2. 
    Vao main.jsx -->
    import { BrowserRouter } from 'react-router-dom'
    <BrowserRouter>
        <App />
    </BrowserRouter>

<!-- 3. Design -->
    Tao thu muc components
        1. Tao file Header, Footer => Tao giao dien truoc
        2. Tao cac pages de dieu huong routes
        3. cap nhat App.jsx
            <div className="">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>

<!-- Sau khi xong prpject phai xoa node_modules -->
<!-- Luu y: phai mo Bang Gitbash -->
rm -rf node_modules package-lock.json