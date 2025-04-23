import React from "react";
import TodoItem from "./TodoItem";
import { motion, AnimatePresence } from "framer-motion";
import { FaTasks, FaSadTear } from "react-icons/fa";

const TodoList = ({ todos, deleteTodo, toggleComplete, darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const emptyVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <div className="mt-6">
      <h2 className={`text-2xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'} mb-4 flex items-center`}>
        <FaTasks className="mr-2 text-purple-500" />
        Danh sách công việc
      </h2>
      
      <AnimatePresence mode="wait">
        {todos.length === 0 ? (
          <motion.div 
            key="empty"
            variants={emptyVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-200'} p-8 rounded-lg border text-center`}
          >
            <FaSadTear className={`mx-auto h-12 w-12 mb-3 ${darkMode ? 'text-gray-500' : 'text-blue-400'}`} />
            <p className={`${darkMode ? 'text-gray-400' : 'text-blue-700'} text-lg`}>
              Không có công việc nào. Thêm công việc mới!
            </p>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mt-4"
            >
              <span className={`inline-block px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-blue-100 text-blue-600'}`}>
                ↑ Thêm công việc ở trên ↑
              </span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3"
          >
            <AnimatePresence mode="popLayout">
              {todos.map((todo) => (
                <motion.div
                  key={todo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ 
                    opacity: 0, 
                    x: -100,
                    transition: { duration: 0.3 }
                  }}
                  layout
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  <TodoItem 
                    todo={todo} 
                    deleteTodo={deleteTodo} 
                    toggleComplete={toggleComplete}
                    darkMode={darkMode}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TodoList;