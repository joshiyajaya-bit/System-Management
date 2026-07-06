import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StudentPagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return [...new Set(pages)];
  };

  return (
    <div className="mt-8 bg-[#1E293B] border border-slate-700 rounded-2xl px-6 py-4 shadow-xl">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-5">

        {/* Page Info */}

        <div className="text-slate-400 text-sm">

          Showing Page

          <span className="mx-2 px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-400 font-semibold">
            {currentPage}
          </span>

          of

          <span className="mx-2 px-3 py-1 rounded-lg bg-blue-500/20 text-blue-400 font-semibold">
            {totalPages}
          </span>

        </div>

        {/* Pagination */}

        <div className="flex items-center gap-2">

          {/* Previous */}

          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${currentPage === 1
                ? "bg-slate-800 text-slate-600 cursor-not-allowed"
                : "bg-[#111827] border border-slate-700 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:scale-105"
              }`}
          >
            <ChevronLeft size={18} />
            Previous
          </button>

          {/* Page Numbers */}

          {getPages().map((page, index) =>
            page === "..." ? (
              <span
                key={index}
                className="text-slate-500 px-2 font-bold"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`w-11 h-11 rounded-xl font-semibold transition-all duration-300 ${currentPage === page
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 scale-105"
                    : "bg-[#111827] border border-slate-700 text-slate-300 hover:bg-cyan-500 hover:text-white hover:scale-105"
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
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${currentPage === totalPages
                ? "bg-slate-800 text-slate-600 cursor-not-allowed"
                : "bg-[#111827] border border-slate-700 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:scale-105"
              }`}
          >
            Next
            <ChevronRight size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}