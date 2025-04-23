import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoStats from "./components/TodoStats";
import FilterButtons from "./components/FilterButtons";
import { mockTodos } from "./data/mockData";

function App() {
  const [todos, setTodos] = useState(mockTodos);
  const [filter, setFilter] = useState("all"); // "all", "completed", "active"
  
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
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in">
          <div className="space-y-6">
            {/* Task Summary Section */}
            <div className="pb-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">Quản lý công việc</h1>
                  <p className="text-sm text-gray-500">Dễ dàng theo dõi và quản lý các công việc của bạn</p>
                </div>
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
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
