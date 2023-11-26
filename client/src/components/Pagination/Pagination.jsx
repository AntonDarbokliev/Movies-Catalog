import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8); // Set a default page size
  const navigate = useNavigate();

  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    updateUrl(nextPage);
  };

  const goToPreviousPage = () => {
    const previousPage = currentPage - 1;
    setCurrentPage(previousPage);
    updateUrl(previousPage);
  };

  const updateUrl = (page) => {
    navigate(`?page=${page}&pageSize=${pageSize}`);
  };

  return (
    <div>
      <p>Current Page: {currentPage}</p>
      <p>Page Size: {pageSize}</p>
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        Previous Page
      </button>
      <button onClick={goToNextPage} /* Add a condition to disable if it's the last page */>
        Next Page
      </button>
      {/* Render the content for the current page */}
    </div>
  );
};