import React from "react";
import { motion } from "framer-motion";
import { FaListUl, FaCheckCircle, FaClock } from "react-icons/fa";

const FilterButtons = ({ currentFilter, setFilter, darkMode }) => {
  const filterOptions = [
    { id: "all", label: "Tất cả", icon: <FaListUl /> },
    { id: "completed", label: "Đã hoàn thành", icon: <FaCheckCircle /> },
    { id: "active", label: "Chưa hoàn thành", icon: <FaClock /> }
  ];
  
  const buttonVariants = {
    inactive: { scale: 1 },
    active: { scale: [1, 1.05, 1], transition: { duration: 0.3 } }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {filterOptions.map(option => (
        <motion.button
          key={option.id}
          onClick={() => setFilter(option.id)}
          initial="inactive"
          animate={currentFilter === option.id ? "active" : "inactive"}
          variants={buttonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-md transition-all duration-200 flex items-center ${
            currentFilter === option.id
              ? option.id === "all"
                ? `${darkMode ? 'bg-purple-700 text-white shadow-md' : 'bg-purple-600 text-white shadow-md'}`
                : option.id === "completed"
                ? `${darkMode ? 'bg-green-700 text-white shadow-md' : 'bg-green-600 text-white shadow-md'}`
                : `${darkMode ? 'bg-amber-600 text-white shadow-md' : 'bg-yellow-500 text-white shadow-md'}`
              : `${darkMode 
                ? 'bg-gray-700 border border-gray-600 text-gray-300 hover:bg-gray-600' 
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'}`
          }`}
          aria-label={`Hiển thị ${option.label}`}
        >
          <span className="mr-1.5">{option.icon}</span>
          {option.label}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterButtons;