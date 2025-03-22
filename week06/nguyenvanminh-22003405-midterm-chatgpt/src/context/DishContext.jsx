import { createContext, useState, useContext, useEffect } from 'react';

const DishContext = createContext();

export const DishProvider = ({ children }) => {
  const [selectedDishes, setSelectedDishes] = useState(() => {
    // Khởi tạo state từ localStorage nếu có
    const savedDishes = localStorage.getItem('selectedDishes');
    return savedDishes ? JSON.parse(savedDishes) : [];
  });
  const [selectedDish, setSelectedDish] = useState(null);

  // Lưu vào localStorage mỗi khi selectedDishes thay đổi
  useEffect(() => {
    localStorage.setItem('selectedDishes', JSON.stringify(selectedDishes));
  }, [selectedDishes]);

  const addDish = (dish) => {
    const existingDish = selectedDishes.find((item) => item.id === dish.id);
    
    if (existingDish) {
      setSelectedDishes(
        selectedDishes.map((item) => 
          item.id === dish.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      );
    } else {
      setSelectedDishes([...selectedDishes, { ...dish, quantity: 1 }]);
    }
  };

  const removeDish = (dishId) => {
    setSelectedDishes(selectedDishes.filter((dish) => dish.id !== dishId));
  };

  const updateQuantity = (dishId, quantity) => {
    if (quantity <= 0) {
      removeDish(dishId);
      return;
    }
    
    setSelectedDishes(
      selectedDishes.map((dish) => 
        dish.id === dishId ? { ...dish, quantity } : dish
      )
    );
  };

  const viewDishDetail = (dish) => {
    setSelectedDish(dish);
  };

  const clearDishDetail = () => {
    setSelectedDish(null);
  };

  const getTotalItems = () => {
    return selectedDishes.reduce((total, dish) => total + dish.quantity, 0);
  };

  const getTotalPrice = () => {
    return selectedDishes.reduce(
      (total, dish) => total + dish.price * dish.quantity, 
      0
    );
  };

  // Thêm hàm xác nhận đơn hàng và xóa giỏ hàng
  const confirmOrder = () => {
    alert('Đặt món thành công! Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.');
    setSelectedDishes([]);
  };

  return (
    <DishContext.Provider
      value={{
        selectedDishes,
        selectedDish,
        addDish,
        removeDish,
        updateQuantity,
        viewDishDetail,
        clearDishDetail,
        getTotalItems,
        getTotalPrice,
        confirmOrder
      }}
    >
      {children}
    </DishContext.Provider>
  );
};

export const useDishContext = () => useContext(DishContext);