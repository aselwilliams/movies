import { Component } from "react";
import "./index.css";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";
import FilterBox from "./components/FilterBox";
import FilterYear from "./components/FilterYear";
// import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      favourites: [],
      searchValue: "",
      filterValue: "",
      isDisabled: false,
      filterYearValue: "",
    };
  }
  //called once on mount
  componentDidMount() {
    this.fetchMovies();

    const movieFavs = JSON.parse(localStorage.getItem("react-movie-app-favs"));
    if (movieFavs) {
      this.setState({ favourites: movieFavs });
    }
  }

  //called on each state or props change
  componentDidUpdate(prevProps, prevState) {
    const { searchValue, filterValue, filterYearValue } = this.state;
    if (
      prevState.searchValue !== searchValue ||
      prevState.filterValue !== filterValue ||
      prevState.filterYearValue !== filterYearValue
    ) {
      this.fetchMovies();
    }
  }

  fetchMovies = () => {
    const url = `http://www.omdbapi.com?s=${this.state.searchValue}&type=${this.state.filterValue}&y=${this.state.filterYearValue}&apikey=bf3b1333`;
    fetch(url)
      .then((rest) => rest.json())
      .then((data) => {
        if (data.Search) this.setState({ movies: data.Search });
      });
  };

  setFilterYearValue = (value) => {
    this.setState({ filterYearValue: value });
  };

  setSearchValue = (value) => {
    this.setState({ searchValue: value });
  };
 
  addFavoriteMovie = (movie, e) => {
    if (!this.state.favourites.includes(movie)  ) {
      const newFavoriteList = [...this.state.favourites, movie];
      this.setState({ favourites: newFavoriteList });
      console.log(e.currentTarget);

      this.saveToLocalStorage(newFavoriteList);
    } 
    
    // if (this.state.favourites.includes(movie) || localStorage.includes(movie)) {
      //this.setState({ isDisabled: !this.state.isDisabled });
      //alert("This movie is already on Favorite List. Please refresh the page");
     
    //}
  };

  saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favs", JSON.stringify(items));
  };
  removeFavoriteMovie = (movie) => {
    const newFavoriteList = this.state.favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    this.setState({ favourites: newFavoriteList });
    this.saveToLocalStorage(newFavoriteList);
  };

  setFilterValue = (value) => {
    this.setState({ filterValue: value });
  };
  render() {
    return (
      <div className="container">
        <h1>Movies App</h1>
        <div className="row justify-content-md-center mb-3">
          <SearchBox setSearchValue={this.setSearchValue} />
          <FilterBox setFilterValue={this.setFilterValue} />
          <FilterYear setFilterYearValue={this.setFilterYearValue} />
        </div>
        <div className="row">
          <MovieList
            movies={this.state.movies}
            handleFavoritesClick={this.addFavoriteMovie}
            favourites={this.state.favourites}
            isDisabled={this.state.isDisabled}
            btnText="Add to Fav"
            btnClass="btn-success"
          />
        </div>
        <h2>My Favorites</h2>
        <div className="row">
          <MovieList
            movies={this.state.favourites}
            handleFavoritesClick={this.removeFavoriteMovie}
            btnText="Remove from Fav"
            btnClass="btn-danger"
          />
        </div>
      </div>
    );
  }
}

export default App;
