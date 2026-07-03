import React from "react";

const StudentPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];

    // Always show first page
    pages.push(1);

    // Left dots
    if (currentPage > 3) {
      pages.push("...");
    }

    // Middle pages
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    // Right dots
    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return [...new Set(pages)];
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
      {/* Page Info */}
      <div className="text-sm text-gray-600">
        Page <span className="font-semibold">{currentPage}</span> of{" "}
        <span className="font-semibold">{totalPages}</span>
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-2">
        {/* Previous */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg border font-medium transition
            ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-indigo-50 border-indigo-200 text-indigo-600"
            }`}
        >
          Previous
        </button>

        {getPages().map((page, index) =>
          page === "..." ? (
            <span
              key={index}
              className="px-2 text-gray-500 font-semibold"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 rounded-lg font-medium transition
                ${
                  currentPage === page
                    ? "bg-indigo-600 text-white"
                    : "bg-white border border-gray-300 hover:bg-indigo-50"
                }`}
            >
              {page}
            </button>
          )
        )}

        {/* Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg border font-medium transition
            ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-indigo-50 border-indigo-200 text-indigo-600"
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentPagination;