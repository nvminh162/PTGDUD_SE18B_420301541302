import React from "react";
import { motion } from "framer-motion";
import { FaTrashAlt, FaCheckCircle } from "react-icons/fa";

const TodoItem = ({ todo, deleteTodo, toggleComplete, darkMode }) => {
  const handleDelete = () => {
    // Thêm hiệu ứng trước khi xóa
    const element = document.getElementById(`todo-${todo.id}`);
    element.classList.add('todo-exit-active');
    
    // Đợi animation hoàn thành trước khi xóa thực sự
    setTimeout(() => {
      deleteTodo(todo.id);
    }, 300);
  };

  return (
    <motion.div 
      id={`todo-${todo.id}`}
      className={`${darkMode 
        ? 'bg-gray-800 hover:bg-gray-700' 
        : 'bg-white hover:bg-gray-50'
      } rounded-lg shadow-md p-4 mb-3 border-l-4 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        todo.completed 
        ? `${darkMode ? 'border-green-600' : 'border-green-500'}` 
        : `${darkMode ? 'border-yellow-600' : 'border-yellow-500'}`
      } hover-card`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 group">
          <motion.button
            onClick={() => toggleComplete(todo.id)}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`rounded-full w-6 h-6 flex items-center justify-center border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-purple-500 ${
              todo.completed 
                ? `${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} border-green-600` 
                : `${darkMode ? 'border-gray-500 hover:border-purple-400' : 'border-gray-400 hover:border-purple-500'}`
            }`}
            aria-label={todo.completed ? "Đánh dấu chưa hoàn thành" : "Đánh dấu hoàn thành"}
            title={todo.completed ? "Đánh dấu chưa hoàn thành" : "Đánh dấu hoàn thành"}
          >
            {todo.completed && (
              <FaCheckCircle className="h-4 w-4 text-white" />
            )}
          </motion.button>
          <motion.h3 
            className={`text-lg font-medium transition-all duration-300 cursor-pointer ${
              darkMode 
                ? todo.completed ? 'text-gray-400 line-through' : 'text-gray-200' 
                : todo.completed ? 'text-gray-500 line-through' : 'text-gray-800'
            } group-hover:${todo.completed ? '' : 'text-purple-600'}`} 
            onClick={() => toggleComplete(todo.id)}
            whileTap={{ scale: 0.98 }}
          >
            {todo.title}
          </motion.h3>
        </div>
        <div className="flex items-center">
          <motion.button
            onClick={handleDelete}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.8 }}
            className={`text-red-500 hover:text-red-700 focus:outline-none transition-colors duration-300 relative group p-2`}
            aria-label="Xóa công việc"
          >
            <FaTrashAlt className="h-5 w-5" />
            <span className="absolute hidden group-hover:block top-full right-0 transform px-2 py-1 text-xs text-white bg-gray-800 rounded-md whitespace-nowrap z-10">
              Xóa
            </span>
          </motion.button>
        </div>
      </div>
      
      {/* Task date indicator */}
      <div className={`mt-2 text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
        Tạo lúc: {new Date(todo.id).toLocaleString()}
      </div>
    </motion.div>
  );
};

export default TodoItem;