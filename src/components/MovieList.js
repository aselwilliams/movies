import React from "react";
import Movie from './Movie'

function MovieList({ movies, btnClass, btnText, handleFavoritesClick }) {
  return (
    <>
      {movies.map((movie, index) => (
          <Movie movie={movie} key={index} btnClass={btnClass} btnText={btnText} handleFavoritesClick={handleFavoritesClick} />
      ))}
    </>
  );
}
export default MovieList;



