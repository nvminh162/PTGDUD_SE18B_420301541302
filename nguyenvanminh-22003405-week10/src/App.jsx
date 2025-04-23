import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoStats from "./components/TodoStats";
import FilterButtons from "./components/FilterButtons";
import { mockTodos } from "./data/mockData";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";
import { FaMoon, FaSun, FaStar, FaDownload, FaTrash } from "react-icons/fa";
import "./App.css";

function App() {
  // Tải danh sách công việc từ localStorage hoặc sử dụng mockTodos nếu không có
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos);
      } catch (error) {
        console.error('Error parsing todos from localStorage:', error);
        return mockTodos;
      }
    }
    return mockTodos;
  });
  
  const [filter, setFilter] = useState("all"); // "all", "completed", "active"
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });
  
  // Lưu danh sách công việc vào localStorage mỗi khi todos thay đổi
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  // Lưu trạng thái dark mode
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);
  
  // Hàm để thêm công việc mới
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(), // Sử dụng timestamp làm id (unique)
      title: title,
      completed: false,
    };
    
    // Thêm công việc mới vào đầu danh sách
    setTodos([newTodo, ...todos]);
    
    // Hiển thị thông báo thành công
    toast.success('Đã thêm công việc mới!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Hàm để xóa công việc
  const deleteTodo = (id) => {
    const todoToDelete = todos.find(todo => todo.id === id);
    
    // Lọc ra các công việc có id khác với id cần xóa
    setTodos(todos.filter(todo => todo.id !== id));
    
    // Hiển thị thông báo xóa
    toast.info(`Đã xóa công việc "${todoToDelete.title}"`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Hàm để toggle trạng thái hoàn thành của công việc
  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        const newStatus = !todo.completed;
        
        // Hiển thị thông báo trạng thái
        setTimeout(() => {
          toast.info(
            newStatus 
              ? `Đã hoàn thành công việc "${todo.title}"` 
              : `Đã đánh dấu "${todo.title}" thành chưa hoàn thành`,
            {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            }
          );
        }, 300);
        
        return { ...todo, completed: newStatus };
      }
      return todo;
    });
    
    setTodos(updatedTodos);
  };
  
  // Lọc danh sách công việc theo trạng thái
  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true; // filter === "all"
  });
  
  // Hàm xóa toàn bộ dữ liệu trong localStorage (tính năng reset)
  const clearLocalStorage = () => {
    if (window.confirm('Bạn có chắc muốn xóa tất cả công việc? Hành động này không thể hoàn tác.')) {
      localStorage.removeItem('todos');
      setTodos(mockTodos);
      
      toast.warning('Đã reset danh sách công việc!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  
  // Hàm xuất dữ liệu ra file JSON
  const exportTodos = () => {
    const dataStr = JSON.stringify(todos, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `todo-list-${new Date().toLocaleDateString()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    toast.success('Đã xuất danh sách công việc!', {
      position: "bottom-right",
      autoClose: 2000,
    });
  };
  
  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900'}`}>
      <Header darkMode={darkMode} />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl relative">
        {/* Theme Toggle & Export - Di chuyển ra khỏi container chính */}
        <div className="absolute top-0 right-4 sm:right-6 flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${darkMode ? 'bg-yellow-500 text-gray-900' : 'bg-gray-800 text-yellow-400'}`}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={exportTodos}
            className="p-2 rounded-full bg-blue-500 text-white"
            aria-label="Export todos to JSON file"
            title="Xuất danh sách công việc"
          >
            <FaDownload />
          </motion.button>
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 animate-fade-in mt-10`} // Thêm mt-10 để tạo khoảng cách cho nút ở trên
        >
          <div className="space-y-6">
            {/* Task Summary Section */}
            <div className={`pb-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <div>
                  <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1 gradient-text`}>Quản lý công việc</h1>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Dễ dàng theo dõi và quản lý các công việc của bạn</p>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={clearLocalStorage}
                  className={`mt-3 sm:mt-0 px-3 py-1 text-xs text-red-600 border border-red-200 rounded-md ${darkMode ? 'hover:bg-red-900' : 'hover:bg-red-50'} transition-colors duration-200 flex items-center`}
                >
                  <FaTrash className="mr-1" />
                  Reset danh sách
                </motion.button>
              </div>
              
              {/* Todo Stats Section */}
              <TodoStats todos={todos} darkMode={darkMode} />
            </div>
            
            {/* Todo Form Section */}
            <div className="py-2">
              <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-3 flex items-center`}>
                <FaStar className="h-5 w-5 mr-2 text-purple-500" />
                Thêm công việc mới
              </h2>
              <TodoForm addTodo={addTodo} darkMode={darkMode} />
            </div>
            
            {/* Filter Section */}
            <div className={`border-t border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'} py-4`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className={`text-md font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} flex items-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Lọc công việc
                </h3>
                {filter !== "all" && (
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Hiển thị: {filteredTodos.length} công việc
                  </span>
                )}
              </div>
              <FilterButtons currentFilter={filter} setFilter={setFilter} darkMode={darkMode} />
            </div>
            
            {/* Todo List Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <TodoList 
                todos={filteredTodos} 
                deleteTodo={deleteTodo} 
                toggleComplete={toggleComplete}
                darkMode={darkMode}
              />
            </motion.div>
            
            {/* LocalStorage Info */}
            <div className={`pt-4 text-center text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
              <p>Dữ liệu của bạn được lưu tự động vào localStorage của trình duyệt.</p>
              <p>Các công việc sẽ không bị mất khi tải lại trang.</p>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer darkMode={darkMode} />
      
      {/* Toast Container */}
      <ToastContainer 
        position="bottom-right"
        theme={darkMode ? "dark" : "light"}
      />
    </div>
  );
}

export default App;
