import "./index.css";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";
import FilterBox from "./components/FilterBox";
import FilterYear from "./components/FilterYear";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterYearValue, setFilterYearValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const fetchMovies = () => {
    const url = `https://www.omdbapi.com?s=${searchValue}&type=${filterValue}&y=${filterYearValue}&apikey=bf3b1333`;
    fetch(url)
      .then((rest) => rest.json())
      .then((data) => {
        if (data.Search) setMovies(data.Search);
      });
  };
  //called once on mount
  useEffect(() => {
    fetchMovies();

    const movieFavs = JSON.parse(localStorage.getItem("react-movie-app-favs"));
    if (movieFavs) {
      setFavourites(movieFavs);
    }
  }, []);

  //called on each state change
  useEffect(() => {
    fetchMovies();
  }, [searchValue, filterValue, filterYearValue]);

  const getFilterValue = (value) => {
    setFilterValue(value);
  };
  const getFilterYearValue = (value) => {
    setFilterYearValue(value);
  };

  const getSearchValue = (value) => {
    setSearchValue(value);
  };

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favourites, movie];
    setFavourites(newFavoriteList);

    saveToLocalStorage(newFavoriteList);
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favs", JSON.stringify(items));
  };
  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <div className="container">
      <h1>Movies App</h1>
      <div className="row justify-content-md-center mb-3">
        <SearchBox setSearchValue={getSearchValue} />
        <FilterBox setFilterValue={getFilterValue} />
        <FilterYear setFilterYearValue={getFilterYearValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleFavoritesClick={addFavoriteMovie}
          favourites={favourites}
          btnText="Add to Fav"
          btnClass="btn-success"
        />
      </div>
      <h2>My Favorites</h2>
      <div className="row">
        <MovieList
          movies={favourites}
          handleFavoritesClick={removeFavoriteMovie}
          btnText="Remove from Fav"
          btnClass="btn-danger"
        />
      </div>
    </div>
  );
}
export default App;
