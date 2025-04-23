import React from "react";

const TodoStats = ({ todos }) => {
  // Đếm số công việc đã hoàn thành
  const completedCount = todos.filter(todo => todo.completed).length;
  // Tổng số công việc
  const totalCount = todos.length;

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg shadow-sm border border-purple-100 p-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        Thống kê công việc
      </h3>

      <div className="flex justify-center items-center p-2">
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <span className="block text-2xl font-bold text-purple-700">{totalCount}</span>
            <span className="text-xs text-gray-500">Tổng số</span>
          </div>
          
          <div className="h-8 w-px bg-gray-300"></div>
          
          <div className="text-center">
            <span className="block text-2xl font-bold text-green-600">{completedCount}</span>
            <span className="text-xs text-gray-500">Hoàn thành</span>
          </div>
          
          <div className="h-8 w-px bg-gray-300"></div>
          
          <div className="text-center">
            <span className="block text-2xl font-bold text-yellow-500">{totalCount - completedCount}</span>
            <span className="text-xs text-gray-500">Chưa hoàn thành</span>
          </div>
        </div>
      </div>
      
      <div className="mt-2 bg-white rounded-md p-2">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-green-600 bg-green-200">
                {totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0}%
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-gray-600">
                Tiến độ công việc
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
            <div style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }} 
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-500 ease-in-out"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoStats;