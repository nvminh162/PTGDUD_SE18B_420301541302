import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoTitle.trim() !== "") {
      addTodo(newTodoTitle.trim());
      setNewTodoTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder="Nhập công việc mới..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 pl-10"
            autoFocus
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </span>
        </div>
        
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
        >
          <span>Thêm</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {newTodoTitle.trim() !== "" && (
        <div className="mt-2 text-sm text-green-600 animate-pulse">
          <p>Nhấn Enter hoặc nút Thêm để tạo công việc mới</p>
        </div>
      )}
    </form>
  );
};

export default TodoForm;