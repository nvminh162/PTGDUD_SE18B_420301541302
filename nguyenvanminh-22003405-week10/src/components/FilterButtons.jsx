import React from "react";

const FilterButtons = ({ currentFilter, setFilter }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-1">
      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
          currentFilter === "all"
            ? "bg-purple-600 text-white shadow-md"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        Tất cả
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
          currentFilter === "completed"
            ? "bg-green-600 text-white shadow-md"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        Đã hoàn thành
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
          currentFilter === "active"
            ? "bg-yellow-500 text-white shadow-md"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        Chưa hoàn thành
      </button>
    </div>
  );
};

export default FilterButtons;