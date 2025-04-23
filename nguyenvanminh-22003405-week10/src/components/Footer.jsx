import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-center">
            <span className="text-purple-400 font-medium">Nguyễn Văn Minh</span>{" "}
            - <span className="text-blue-400">22003405</span>
          </p>
          <p className="md:ml-2 text-center text-gray-400 text-sm mt-1 md:mt-0">
            &copy; {new Date().getFullYear()} | TodoApp
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;