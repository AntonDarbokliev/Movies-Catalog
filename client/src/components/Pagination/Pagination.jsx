import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const Pagination = () => {
   

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;
  const currentPageSize = Number(searchParams.get('pageSize')) || 8;
  const movieName = searchParams.get('name') || '';
  const movieGenres = searchParams.get('genres') || '';

  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    updateUrl(nextPage);
  };

  const goToPreviousPage = () => {
    const previousPage = currentPage - 1;
    updateUrl(previousPage);
  };

  const updateUrl = (page) => {
    setSearchParams({...searchParams,page})
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