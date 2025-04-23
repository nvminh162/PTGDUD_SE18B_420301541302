import React from "react";
import { motion } from "framer-motion";

const Header = ({ darkMode }) => {
  const letterVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    })
  };
  
  const title = "TodoApp";

  return (
    <header className={`${darkMode ? 'bg-gradient-to-r from-purple-900 to-blue-900' : 'bg-gradient-to-r from-purple-600 to-blue-500'} shadow-lg`}>
      <div className="container mx-auto py-4 px-6">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wider flex justify-center">
              {title.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  className="inline-block transform hover:scale-110 transition-transform duration-300"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-white text-opacity-80 mt-1 italic"
            >
              Quản lý công việc hiệu quả
            </motion.p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;