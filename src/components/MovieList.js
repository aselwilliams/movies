import {Component} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Movie from './Movie'

class MovieList extends Component{

    render(){
        const {movies,btnClass,btnText,handleFavoritesClick,favourites}=this.props
        return(
            <>
                {movies.map((movie, index)=>(
                    <div className="col-md-3 mb-4">
                       <Movie key={index} movie={movie} {...this.props} /> 
                    </div>
                ))}
            </>
        )
    }
}
export default MovieList