import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuList from '../components/MenuList';
import BookTable from '../components/BookTable';

function Home() {
  const [featuredDishes, setFeaturedDishes] = useState([]);
  const [showBookTable, setShowBookTable] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch menu data
    const fetchData = async () => {
      try {
        const response = await import('../data/menu.json');
        // Get just 3 random dishes for featured section
        const shuffled = [...response.default].sort(() => 0.5 - Math.random());
        setFeaturedDishes(shuffled.slice(0, 3));
        setLoading(false);
      } catch (error) {
        console.error("Error loading menu data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-red-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Nhà Hàng ABC
              </h1>
              <p className="text-xl mb-6">
                Trải nghiệm ẩm thực Việt Nam truyền thống với hương vị đậm đà và không gian ấm cúng
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/menu"
                  className="bg-white text-red-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                >
                  Xem Thực Đơn
                </Link>
                <button
                  onClick={() => setShowBookTable(true)}
                  className="bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition-colors"
                >
                  Đặt Bàn Ngay
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170&auto=format&fit=crop"
                alt="Restaurant Interior"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Về Nhà Hàng ABC</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Nhà Hàng ABC tự hào phục vụ các món ăn truyền thống Việt Nam với nguyên liệu tươi ngon nhất, 
              được chế biến bởi các đầu bếp giàu kinh nghiệm và tâm huyết với ẩm thực Việt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">10+</div>
              <h3 className="text-xl font-semibold mb-2">Năm Kinh Nghiệm</h3>
              <p className="text-gray-600">
                Với hơn một thập kỷ kinh nghiệm, chúng tôi tự hào về chất lượng dịch vụ và món ăn.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
              <h3 className="text-xl font-semibold mb-2">Món Ăn Đặc Sắc</h3>
              <p className="text-gray-600">
                Thực đơn phong phú với hơn 50 món ăn đặc sắc từ khắp các vùng miền Việt Nam.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
              <h3 className="text-xl font-semibold mb-2">Khách Hàng Hài Lòng</h3>
              <p className="text-gray-600">
                Hàng ngàn khách hàng đã trải nghiệm và hài lòng với dịch vụ của chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Contact CTA */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Liên Hệ Với Chúng Tôi</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Đặt bàn ngay hôm nay để trải nghiệm hương vị tuyệt vời tại Nhà Hàng ABC. 
            Chúng tôi luôn sẵn sàng phục vụ bạn!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gray-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition-colors"
            >
              Thông Tin Liên Hệ
            </Link>
            <button
              onClick={() => setShowBookTable(true)}
              className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
            >
              Đặt Bàn Ngay
            </button>
          </div>
        </div>
      </section>

      {showBookTable && (
        <BookTable onClose={() => setShowBookTable(false)} />
      )}
    </div>
  );
}

export default Home;