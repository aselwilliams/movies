

function Movie({movie,btnClass, btnText, handleFavoritesClick}){

    return (
        <div className="col-md-3 mb-4" >
<div className="card">
  <img
    src={
      movie.Poster === "N/A"
        ? "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png"
        : movie.Poster
    }
    className="card-img-top"
    alt={movie.title}
  />
  <div className="card-body">
    <p>
      {movie.Title} - {movie.Year}
    </p>

    <button
      onClick={(e) => handleFavoritesClick(movie, e)}
      className={`btn btn-sm ${btnClass}`}
    >
      {btnText}
    </button>
  </div>
</div>
</div>
    )
}
export default Movie



// import React, { Component } from "react";

// export class Movie extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             localData: [],
//             isDisabled:false
//         }
//     }
//     handleClick=(movie,e)=>{
//         console.log('btnText -', this.props.btnText)
//         // debugger
//         if(this.props.btnText==="Add to Fav"){
//             this.setState({isDisabled:!this.state.isDisabled})
//         }
       
        
//         console.log('<< before', this.state.isDisabled)
//         // this.setState({ isDisabled: !this.state.isDisabled })
//         // this.setState((state, props) => ({
//         //     isDisabled: !state.isDisabled
//         // }))
//         this.props.handleFavoritesClick(movie, e)
//         console.log('>> after', this.state.isDisabled)
//     }
//     componentDidMount(){
        
//         this.setState({
//             localData: localStorage.getItem("react-movie-app-favs")
//         })
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.isDisabled !== this.state.isDisabled) {

//         }
//     }

//     checkLocalData = (movie) => {
//         return this.state.localData.indexOf(movie)
//     }
    
//   render() {
//     //console.log('>> after', this.state.isDisabled)
//     console.log(this.state.localData)
//     const {movie,btnClass,btnText,handleFavoritesClick,favourites}=this.props
//     return (
//     <div className="card">
//         <img
//             src={
//             movie.Poster === "N/A"
//                 ? "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png"
//                 : movie.Poster
//             }
//             className="card-img-top"
//         />
//         <div className="card-body">
//             <p>
//             {movie.Title} - {movie.Year}
//             </p>

//             <button
//                 disabled={this.checkLocalData >= 0 ? !this.state.isDisabled : this.state.isDisabled}
        
//                 onClick={(e) => this.handleClick(movie, e)}
//                 className={`btn btn-sm ${btnClass}`}
//             >
//             {btnText}
//             </button>
//         </div>
//     </div>
//     );
//   }
// }

// export default Movie;
