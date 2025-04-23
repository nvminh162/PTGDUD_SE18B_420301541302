import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoStats from "./components/TodoStats";
import FilterButtons from "./components/FilterButtons";
import { mockTodos } from "./data/mockData";

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
  
  // Lưu danh sách công việc vào localStorage mỗi khi todos thay đổi
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  // Hàm để thêm công việc mới
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(), // Sử dụng timestamp làm id (unique)
      title: title,
      completed: false,
    };
    
    // Thêm công việc mới vào đầu danh sách
    setTodos([newTodo, ...todos]);
  };

  // Hàm để xóa công việc
  const deleteTodo = (id) => {
    // Lọc ra các công việc có id khác với id cần xóa
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Hàm để toggle trạng thái hoàn thành của công việc
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
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
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in">
          <div className="space-y-6">
            {/* Task Summary Section */}
            <div className="pb-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">Quản lý công việc</h1>
                  <p className="text-sm text-gray-500">Dễ dàng theo dõi và quản lý các công việc của bạn</p>
                </div>
                <button 
                  onClick={clearLocalStorage}
                  className="mt-3 sm:mt-0 px-3 py-1 text-xs text-red-600 border border-red-200 rounded-md hover:bg-red-50 transition-colors duration-200 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Reset danh sách
                </button>
              </div>
              
              {/* Todo Stats Section */}
              <TodoStats todos={todos} />
            </div>
            
            {/* Todo Form Section */}
            <div className="py-2">
              <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Thêm công việc mới
              </h2>
              <TodoForm addTodo={addTodo} />
            </div>
            
            {/* Filter Section */}
            <div className="border-t border-b border-gray-100 py-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-md font-medium text-gray-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Lọc công việc
                </h3>
                {filter !== "all" && (
                  <span className="text-sm text-gray-500">
                    Hiển thị: {filteredTodos.length} công việc
                  </span>
                )}
              </div>
              <FilterButtons currentFilter={filter} setFilter={setFilter} />
            </div>
            
            {/* Todo List Section */}
            <TodoList todos={filteredTodos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
            
            {/* LocalStorage Info */}
            <div className="pt-4 text-center text-xs text-gray-400 border-t border-gray-100">
              <p>Dữ liệu của bạn được lưu tự động vào localStorage của trình duyệt.</p>
              <p>Các công việc sẽ không bị mất khi tải lại trang.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
