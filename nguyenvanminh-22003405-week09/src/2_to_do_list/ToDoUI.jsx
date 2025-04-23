import React, { useState } from 'react';

function TodoUI({ todos, addTodo, toggleTodo, removeTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">To-Do List</h2>
        <p className="text-gray-500 mt-2">Manage your tasks efficiently</p>
      </div>

      {/* Form thêm công việc với thiết kế hiện đại */}
      <div className="max-w-2xl mx-auto mb-8">
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
            className="w-full p-4 pr-24 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
          />
          <button
            type="submit"
            className="absolute right-1 top-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-3 rounded-full hover:shadow-lg transition-all duration-200"
          >
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add
            </span>
          </button>
        </form>
      </div>

      {/* Danh sách công việc */}
      <div className="max-w-2xl mx-auto">
        {todos.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <p className="text-gray-500 mt-3">No tasks yet. Add a new task to get started!</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`group flex items-center p-4 border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md ${
                  todo.completed ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <div 
                  onClick={() => toggleTodo(todo.id)}
                  className="flex items-center flex-1 cursor-pointer"
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 mr-3 grid place-items-center ${
                    todo.completed ? 'border-purple-500 bg-purple-500' : 'border-gray-300'
                  }`}>
                    {todo.completed && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={`${
                    todo.completed ? 'line-through text-gray-500' : 'text-gray-700'
                  } transition-all duration-200`}>
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="ml-2 p-1 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
        {todos.length > 0 && (
          <div className="mt-6 text-center text-sm text-gray-500">
            {todos.filter(t => t.completed).length} of {todos.length} tasks completed
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoUI;