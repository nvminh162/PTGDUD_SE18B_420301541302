import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
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
    if (!formData.email.trim()) newErrors.email = 'Vui lòng nhập email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) 
      newErrors.email = 'Email không hợp lệ';
    if (!formData.message.trim()) newErrors.message = 'Vui lòng nhập nội dung';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Contact form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Liên Hệ Với Chúng Tôi</h1>
        <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Chúng tôi luôn sẵn sàng lắng nghe ý kiến của bạn. Hãy liên hệ với chúng tôi 
          nếu bạn có bất kỳ câu hỏi hoặc góp ý nào.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Contact Information */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Thông Tin Liên Hệ</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Địa Chỉ</h3>
            <p className="text-gray-700">
              123 Đường Lê Lợi, Quận 1<br />
              Thành phố Hồ Chí Minh<br />
              Việt Nam
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Giờ Mở Cửa</h3>
            <p className="text-gray-700">
              Thứ Hai - Thứ Sáu: 10:00 - 22:00<br />
              Thứ Bảy - Chủ Nhật: 08:00 - 23:00
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Liên Hệ</h3>
            <p className="text-gray-700">
              Phone: (028) 1234 5678<br />
              Email: info@nhahangabc.com
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Đặt Bàn</h3>
            <p className="text-gray-700">
              Phone: (028) 8765 4321<br />
              Email: booking@nhahangabc.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {isSubmitted ? (
            <div className="text-center py-10">
              <div className="text-green-600 text-5xl mb-4">✓</div>
              <h3 className="text-xl font-medium mb-2">Gửi thông tin thành công!</h3>
              <p className="text-gray-600">
                Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
              >
                Gửi tin nhắn khác
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6">Gửi Tin Nhắn</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Họ và tên</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Nguyễn Văn A"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Số điện thoại (tùy chọn)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="0901234567"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Tin nhắn</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Nhập nội dung tin nhắn..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                >
                  Gửi tin nhắn
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;