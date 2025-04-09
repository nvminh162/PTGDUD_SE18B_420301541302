function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold mb-2">Nhà Hàng ABC</h2>
              <p className="text-gray-400">Chuyên các món ăn truyền thống Việt Nam</p>
            </div>
            
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-1">Thông tin sinh viên</h3>
              <p>Nguyễn Văn Minh</p>
              <p>Lớp: DHKTPM18B</p>
              <p>MSV: 22003405</p>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Nhà Hàng ABC</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;