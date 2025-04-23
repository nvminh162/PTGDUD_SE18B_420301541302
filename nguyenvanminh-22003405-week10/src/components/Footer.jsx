import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaGithub } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'} py-4 mt-auto`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center"
          >
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="text-purple-400 font-medium"
            >
              Nguyễn Văn Minh
            </motion.span>
            <span className="mx-2">-</span>
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="text-blue-400"
            >
              22003405
            </motion.span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="md:ml-6 text-center text-gray-400 text-sm mt-1 md:mt-0 flex items-center"
          >
            <span>&copy; {new Date().getFullYear()} | Made with</span>
            <motion.span 
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1
              }}
              className="mx-1 text-red-500"
            >
              <FaHeart />
            </motion.span>
            <span>by</span>
            <a 
              href="#" 
              className={`ml-1 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-300'} transition-colors duration-300 flex items-center`}
            >
              <FaGithub className="ml-1" /> <span className="ml-1">nguyenvanminh</span>
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;