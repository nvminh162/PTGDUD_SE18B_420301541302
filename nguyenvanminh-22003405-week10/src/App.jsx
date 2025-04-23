import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { mockTodos } from "./data/mockData";

function App() {
  const [todos, setTodos] = useState(mockTodos);
  
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
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in">
          <div className="space-y-6">
            {/* Task Summary Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-gray-200">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Quản lý công việc</h1>
                <p className="text-sm text-gray-500">Dễ dàng theo dõi và quản lý các công việc của bạn</p>
              </div>
              
              <div className="mt-4 sm:mt-0 px-4 py-2 bg-purple-50 rounded-lg border border-purple-100">
                <p className="text-sm font-medium">
                  <span className="text-purple-700">Tổng số: </span>
                  <span className="text-gray-700">{todos.length}</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-green-600">Hoàn thành: </span>
                  <span className="text-gray-700">{todos.filter(todo => todo.completed).length}</span>
                </p>
              </div>
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
            
            {/* Todo List Section */}
            <TodoList todos={todos} deleteTodo={deleteTodo} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
