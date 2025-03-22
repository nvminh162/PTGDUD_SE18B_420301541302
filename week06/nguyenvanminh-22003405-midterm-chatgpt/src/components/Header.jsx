import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BookTable from './BookTable';
import { useDishContext } from '../context/DishContext';

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useDishContext();

  const totalItems = getTotalItems();

  const handleBookTable = () => {
    setShowModal(true);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-red-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Nhà Hàng ABC</h1>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {menuOpen ? 'Đóng' : 'Menu'}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link 
                to="/" 
                className={`hover:text-yellow-300 transition-colors ${
                  location.pathname === '/' ? 'text-yellow-300 font-bold' : ''
                }`}
              >
                Trang chủ
              </Link>
              <Link 
                to="/menu" 
                className={`hover:text-yellow-300 transition-colors ${
                  location.pathname === '/menu' ? 'text-yellow-300 font-bold' : ''
                }`}
              >
                Thực đơn
              </Link>
              <Link 
                to="/contact" 
                className={`hover:text-yellow-300 transition-colors ${
                  location.pathname === '/contact' ? 'text-yellow-300 font-bold' : ''
                }`}
              >
                Liên hệ
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <span className="text-white">Đã chọn: {totalItems} món</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>

              <button
                onClick={handleBookTable}
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md transition-colors"
              >
                Đặt Bàn
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`hover:text-yellow-300 transition-colors ${
                  location.pathname === '/' ? 'text-yellow-300 font-bold' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Trang chủ
              </Link>
              <Link 
                to="/menu" 
                className={`hover:text-yellow-300 transition-colors ${
                  location.pathname === '/menu' ? 'text-yellow-300 font-bold' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Thực đơn
              </Link>
              <Link 
                to="/contact" 
                className={`hover:text-yellow-300 transition-colors ${
                  location.pathname === '/contact' ? 'text-yellow-300 font-bold' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Liên hệ
              </Link>
              
              <div className="flex items-center space-x-2 mt-2">
                <div className="relative">
                  <span className="text-white">Đã chọn: {totalItems} món</span>
                </div>

                <button
                  onClick={handleBookTable}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md transition-colors"
                >
                  Đặt Bàn
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {showModal && <BookTable onClose={() => setShowModal(false)} />}
    </header>
  );
}

export default Header;