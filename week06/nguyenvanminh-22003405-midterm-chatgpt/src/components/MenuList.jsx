import { useState, useEffect } from 'react';
import { useDishContext } from '../context/DishContext';

function MenuList({ dishes }) {
  const { 
    addDish, 
    selectedDish, 
    viewDishDetail, 
    clearDishDetail 
  } = useDishContext();
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (selectedDish) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [selectedDish]);

  const handleViewDetails = (dish) => {
    viewDishDetail(dish);
  };

  const handleCloseModal = () => {
    clearDishDetail();
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map(dish => (
          <div 
            key={dish.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={dish.image} 
                alt={dish.name} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
              <p className="text-red-600 font-medium mb-2">{dish.price.toLocaleString()}đ</p>
              <p className="text-gray-600 mb-4 h-16 overflow-hidden text-sm">{dish.description}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => addDish(dish)}
                  className="bg-red-600 text-white py-1.5 px-3 rounded-md hover:bg-red-700 transition-colors"
                >
                  Thêm vào giỏ
                </button>
                <button
                  onClick={() => handleViewDetails(dish)}
                  className="bg-gray-200 text-gray-800 py-1.5 px-3 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for dish details */}
      {isModalOpen && selectedDish && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full overflow-hidden">
            <div className="relative h-56 md:h-64">
              <img 
                src={selectedDish.image} 
                alt={selectedDish.name} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={handleCloseModal}
                className="absolute top-2 right-2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70"
              >
                X
              </button>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-bold">{selectedDish.name}</h2>
                <p className="text-red-600 font-semibold text-lg">{selectedDish.price.toLocaleString()}đ</p>
              </div>
              <p className="text-gray-700 mb-4">{selectedDish.detailedDescription}</p>
              <button
                onClick={() => {
                  addDish(selectedDish);
                  handleCloseModal();
                }}
                className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
              >
                Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuList;