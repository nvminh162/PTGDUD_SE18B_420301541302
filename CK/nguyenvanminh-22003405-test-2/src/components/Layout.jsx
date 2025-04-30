import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Quản Lý Sản Phẩm</Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-blue-200 transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/add" className="hover:text-blue-200 transition-colors">
                  Thêm sản phẩm
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow bg-gray-100">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Quản Lý Sản Phẩm - Đồ án cuối kỳ</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;