import React from "react";
import { motion } from "framer-motion";
import { FaChartBar, FaCheck, FaClock, FaTasks } from "react-icons/fa";

const TodoStats = ({ todos, darkMode }) => {
  // Đếm số công việc đã hoàn thành
  const completedCount = todos.filter(todo => todo.completed).length;
  // Tổng số công việc
  const totalCount = todos.length;
  // Phần trăm hoàn thành
  const completionPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-purple-50 to-blue-50'} rounded-lg shadow-sm ${darkMode ? 'border border-gray-700' : 'border border-purple-100'} p-4`}
    >
      <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2 flex items-center`}>
        <FaChartBar className="h-4 w-4 mr-1 text-purple-500" />
        Thống kê công việc
      </h3>

      <div className="flex justify-center items-center p-2">
        <div className="flex flex-wrap items-center justify-around w-full gap-2">
          <motion.div
            custom={0}
            variants={statVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.span 
              className={`block text-2xl font-bold text-purple-600 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: 0 }}
            >
              {totalCount}
            </motion.span>
            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center justify-center`}>
              <FaTasks className="mr-1" /> Tổng số
            </span>
          </motion.div>
          
          <div className={`h-8 w-px ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
          
          <motion.div
            custom={1}
            variants={statVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.span 
              className={`block text-2xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, delay: 0.2, repeat: 0 }}
            >
              {completedCount}
            </motion.span>
            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center justify-center`}>
              <FaCheck className="mr-1" /> Hoàn thành
            </span>
          </motion.div>
          
          <div className={`h-8 w-px ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
          
          <motion.div
            custom={2}
            variants={statVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.span 
              className={`block text-2xl font-bold ${darkMode ? 'text-yellow-500' : 'text-yellow-500'}`}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, delay: 0.4, repeat: 0 }}
            >
              {totalCount - completedCount}
            </motion.span>
            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center justify-center`}>
              <FaClock className="mr-1" /> Chưa hoàn thành
            </span>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className={`mt-2 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-md p-2`}
      >
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <motion.span 
                className={`text-xs font-semibold inline-block py-1 px-2 rounded-full ${darkMode ? 'text-green-400 bg-green-900' : 'text-green-600 bg-green-200'}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 10, delay: 0.7 }}
              >
                {completionPercentage}%
              </motion.span>
            </div>
            <div className="text-right">
              <span className={`text-xs font-semibold inline-block ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Tiến độ công việc
              </span>
            </div>
          </div>
          <div className={`overflow-hidden h-2 mb-1 text-xs flex rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${completionPercentage}%` }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${darkMode ? 'bg-green-600' : 'bg-green-500'} transition-all duration-500 ease-in-out`}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TodoStats;