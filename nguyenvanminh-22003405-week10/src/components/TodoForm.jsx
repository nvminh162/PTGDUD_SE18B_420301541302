import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaTimes } from "react-icons/fa";

const TodoForm = ({ addTodo, darkMode }) => {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoTitle.trim() !== "") {
      addTodo(newTodoTitle.trim());
      setNewTodoTitle("");
      setIsTyping(false);
    }
  };
  
  const handleChange = (e) => {
    setNewTodoTitle(e.target.value);
    setIsTyping(e.target.value.trim() !== "");
  };
  
  const clearInput = () => {
    setNewTodoTitle("");
    setIsTyping(false);
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="mb-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <input
            type="text"
            value={newTodoTitle}
            onChange={handleChange}
            placeholder="Nhập công việc mới..."
            className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 pl-10
                      ${darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500' 
                        : 'border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500'
                      }`}
            autoFocus
          />
          <span className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`}>
            <FaPlus className="h-4 w-4" />
          </span>
          
          {isTyping && (
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.2 }}
              onClick={clearInput}
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'} hover:text-gray-700 focus:outline-none`}
            >
              <FaTimes className="h-4 w-4" />
            </motion.button>
          )}
        </div>
        
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 ${darkMode 
            ? 'bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-800 hover:to-blue-800' 
            : 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600'
          } text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center shine`}
          disabled={!isTyping}
        >
          <span>Thêm</span>
          <FaPlus className="ml-2" />
        </motion.button>
      </div>
      
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isTyping ? 1 : 0,
          height: isTyping ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        {newTodoTitle.trim() !== "" && (
          <div className={`mt-2 text-sm ${darkMode ? 'text-green-400' : 'text-green-600'} animate-pulse`}>
            <p>Nhấn Enter hoặc nút Thêm để tạo công việc mới</p>
          </div>
        )}
      </motion.div>
    </motion.form>
  );
};

export default TodoForm;