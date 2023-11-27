import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryContext } from '../../contexts/QueryContext.jsx';

export const Pagination = () => {
   const {currentPage,setCurrentPage,currentPageSize,movieName,movieGenres} =  useQueryContext()

  const navigate = useNavigate();

  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    updateUrl(nextPage);
  };

  const goToPreviousPage = () => {
    const previousPage = currentPage - 1;
    updateUrl(previousPage);
  };

  const updateUrl = (page) => {
    navigate(`?name=${movieName}&genres=${movieGenres}&page=${page}&pageSize=${currentPageSize}`);
  };

  return (
    <div>
      <p>Current Page: {currentPage}</p>
      <p>Page Size: {currentPageSize}</p>
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