// src/components/PaginationComponent.js
import React from "react";

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-4">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`${
            page === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } px-4 py-2 mx-1 rounded-lg`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default PaginationComponent;
