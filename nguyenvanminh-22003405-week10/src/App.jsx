import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import { mockTodos } from "./data/mockData";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(mockTodos);
  
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
            
            {/* Todo List Section */}
            <TodoList todos={todos} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
