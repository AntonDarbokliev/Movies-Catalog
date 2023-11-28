import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useMovieContext } from '../../contexts/MovieContext.jsx';

import './Pagination.css'
import { SubmitButton } from '../Shared/SubmitButton/SubmitButton.jsx';

export const Pagination = () => {
   
  const {movies} = useMovieContext()
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
      <p className='paginationText'>Current Page: {currentPage}</p>
      <p className='paginationText'>Page Size: {currentPageSize}</p>
      <div id='paginationButtons'>
      <SubmitButton text={'Previous Page'} disabled={currentPage === 1} onClick={goToPreviousPage}/>
      <SubmitButton text={'Next Page'} disabled={movies.length < currentPageSize} onClick={goToNextPage}/>
      </div>
    </div>
  );
};