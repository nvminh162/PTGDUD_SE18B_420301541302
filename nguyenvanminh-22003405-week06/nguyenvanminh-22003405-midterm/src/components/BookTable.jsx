import { useState } from 'react';
import { useDishContext } from '../context/DishContext';

function BookTable({ onClose }) {
  const { selectedDishes, getTotalPrice, confirmOrder } = useDishContext();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập họ tên';
    if (!formData.phone.trim()) newErrors.phone = 'Vui lòng nhập số điện thoại';
    else if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Số điện thoại không hợp lệ';
    if (!formData.date) newErrors.date = 'Vui lòng chọn ngày';
    if (!formData.time) newErrors.time = 'Vui lòng chọn giờ';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      console.log('Selected dishes:', selectedDishes);
      
      // Nếu có món đã chọn, đồng thời xác nhận đặt món
      if (selectedDishes.length > 0) {
        confirmOrder();
      }
      
      setIsSubmitted(true);
    }
  };

  // Set min date as today
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Đặt Bàn</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              Đóng
            </button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="text-green-600 text-5xl mb-4">✓</div>
              <h3 className="text-xl font-medium mb-2">Đặt bàn thành công!</h3>
              <p className="mb-4">
                Cảm ơn {formData.name} đã đặt bàn tại nhà hàng ABC. Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.
              </p>
              <button
                onClick={onClose}
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
              >
                Đóng
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Họ và tên</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Nguyễn Văn A"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Số điện thoại</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="0901234567"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 mb-1">Ngày</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={today}
                    className={`w-full px-3 py-2 border rounded-md ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Giờ</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${errors.time ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Số người</label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  min="1"
                  max="20"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Ghi chú</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Yêu cầu đặc biệt..."
                ></textarea>
              </div>

              {selectedDishes.length > 0 && (
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Món ăn đã chọn</label>
                  <div className="border border-gray-300 rounded-md p-3">
                    {selectedDishes.map(dish => (
                      <div key={dish.id} className="flex justify-between mb-1">
                        <span>{dish.name} x {dish.quantity}</span>
                        <span>{(dish.price * dish.quantity).toLocaleString()}đ</span>
                      </div>
                    ))}
                    <div className="mt-2 pt-2 border-t border-gray-200 font-bold flex justify-between">
                      <span>Tổng cộng:</span>
                      <span>{getTotalPrice().toLocaleString()}đ</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                >
                  Xác nhận đặt bàn
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookTable;