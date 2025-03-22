import { useState, useEffect } from 'react';
import MenuList from '../components/MenuList';
import { useDishContext } from '../context/DishContext';

function Menu() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const { selectedDishes, removeDish, updateQuantity, getTotalPrice, confirmOrder } = useDishContext();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await import('../data/menu.json');
        setDishes(response.default);
        setLoading(false);
      } catch (error) {
        console.error("Error loading menu data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleConfirmOrder = () => {
    confirmOrder();
    setShowCart(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Thực Đơn Nhà Hàng ABC</h1>
        <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Khám phá các món ăn truyền thống Việt Nam với hương vị đậm đà, 
          được chế biến bằng những nguyên liệu tươi ngon nhất
        </p>
      </div>

      {/* Menu category filters - for future expansion */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 mx-1 rounded-md ${
            activeCategory === 'all' 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
          onClick={() => setActiveCategory('all')}
        >
          Tất cả
        </button>
        {/* Additional category buttons would go here */}
      </div>

      {/* Cart button for mobile */}
      {selectedDishes.length > 0 && (
        <div className="md:hidden mb-4">
          <button
            onClick={toggleCart}
            className="bg-red-600 text-white px-4 py-2 rounded-md w-full flex justify-between items-center"
          >
            <span>Xem giỏ hàng ({selectedDishes.length} món)</span>
            <span>{getTotalPrice().toLocaleString()}đ</span>
          </button>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-6">
        {/* Menu list */}
        <div className={`${selectedDishes.length > 0 ? 'md:w-2/3' : 'w-full'}`}>
          {loading ? (
            <div className="text-center py-10">
              <p>Đang tải danh sách món ăn...</p>
            </div>
          ) : (
            <MenuList dishes={dishes} />
          )}
        </div>

        {/* Shopping cart - visible on desktop or when toggled on mobile */}
        {selectedDishes.length > 0 && (showCart || window.innerWidth >= 768) && (
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Giỏ hàng của bạn</h2>
                <button 
                  onClick={toggleCart}
                  className="md:hidden text-gray-500"
                >
                  Đóng
                </button>
              </div>

              <div className="max-h-96 overflow-y-auto mb-4">
                {selectedDishes.map(dish => (
                  <div key={dish.id} className="flex justify-between items-center py-3 border-b">
                    <div className="flex items-center">
                      <img 
                        src={dish.image} 
                        alt={dish.name}
                        className="w-16 h-16 object-cover rounded-md mr-3" 
                      />
                      <div>
                        <h3 className="font-medium">{dish.name}</h3>
                        <p className="text-red-600">{dish.price.toLocaleString()}đ</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(dish.id, dish.quantity - 1)}
                        className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="mx-2">{dish.quantity}</span>
                      <button
                        onClick={() => updateQuantity(dish.id, dish.quantity + 1)}
                        className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeDish(dish.id)}
                        className="ml-2 text-red-500 w-8 h-8 flex items-center justify-center"
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>Tạm tính:</span>
                  <span>{getTotalPrice().toLocaleString()}đ</span>
                </div>
                <button
                  onClick={handleConfirmOrder}
                  className="bg-red-600 text-white py-2 px-4 rounded-md w-full hover:bg-red-700 transition-colors"
                >
                  Xác nhận đặt món
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;