import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg">
      <div className="container mx-auto py-4 px-6">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wider">
              <span className="inline-block transform hover:scale-110 transition-transform duration-300">T</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-75">o</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-100">d</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-125">o</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-150">A</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-175">p</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-200">p</span>
            </h1>
            <p className="text-white text-opacity-80 mt-1 italic">Quản lý công việc hiệu quả</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;