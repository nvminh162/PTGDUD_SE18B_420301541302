import React from "react";

const TodoItem = ({ todo, deleteTodo }) => {
  const handleDelete = () => {
    // Thêm hiệu ứng trước khi xóa
    const element = document.getElementById(`todo-${todo.id}`);
    element.classList.add('todo-exit-active');
    
    // Đợi animation hoàn thành trước khi xóa thực sự
    setTimeout(() => {
      deleteTodo(todo.id);
    }, 200);
  };

  return (
    <div 
      id={`todo-${todo.id}`}
      className={`bg-white rounded-lg shadow-md p-4 mb-3 border-l-4 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${todo.completed ? 'border-green-500' : 'border-yellow-500'}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`rounded-full w-5 h-5 flex items-center justify-center border ${todo.completed ? 'bg-green-500 border-green-600' : 'border-gray-400'}`}>
            {todo.completed && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <h3 className={`text-lg font-medium ${todo.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
            {todo.title}
          </h3>
        </div>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 focus:outline-none transition-colors duration-300 transform hover:scale-110 group relative"
          aria-label="Xóa công việc"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          <span className="absolute hidden group-hover:block text-xs bg-red-100 text-red-800 py-1 px-2 rounded -ml-6 -mt-2">
            Xóa
          </span>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;