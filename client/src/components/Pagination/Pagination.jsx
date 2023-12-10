import React, { useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMovieContext } from "../../contexts/MovieContext.jsx";

import "./Pagination.css";
import { SubmitButton } from "../Shared/SubmitButton/SubmitButton.jsx";

export const Pagination = () => {
  const { movies } = useMovieContext();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const currentPageSize = Number(searchParams.get("pageSize")) || 8;
  const movieName = searchParams.get("name") || "";
  const movieGenres = searchParams.get("genres") || "";

  const goToNextPage = useCallback(() => {
    const nextPage = currentPage + 1;
    updateUrl(nextPage);
    window.scrollTo(0, 0);
  },[currentPage])

  const goToPreviousPage = useCallback(() => {
    const previousPage = currentPage - 1;
    updateUrl(previousPage);
    window.scrollTo(0, 0);
  },[currentPage])

  const updateUrl = (page) => {
    setSearchParams({ ...searchParams, page });
    navigate(
      `?name=${movieName}&genres=${movieGenres}&page=${page}&pageSize=${currentPageSize}`
    );
  };

  const selectOnChange = (e) => {
    const pageSize = e.target.value
    navigate(
      `?name=${movieName}&genres=${movieGenres}&page=${currentPage}&pageSize=${pageSize}`
    );
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <p className="paginationText">Current Page: {currentPage}</p>
      <p className="paginationText">Page Size: {currentPageSize}</p>
      <div id="paginationButtons">
        <SubmitButton
          text={"Previous Page"}
          disabled={currentPage === 1}
          onClick={goToPreviousPage}
        />
        <select id="paginationSelect" onChange={selectOnChange}>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="20">20</option>
          {/* <!-- Add more options as needed --> */}
        </select>
        <SubmitButton
          text={"Next Page"}
          disabled={movies.length < currentPageSize}
          onClick={goToNextPage}
        />
      </div>
    </div>
  );
};
