import React,{Component} from 'react';

import {addFavorite, removeFavorites} from '../actions'

class MovieCard extends React.Component{

  handleFavouriteClick=()=>{
    const{movie}=this.props;
    this.props.dispatch(addFavorite(movie))
  }

  
  handleUnFavouriteClick=()=>{
    const {movie}=this.props;
    this.props.dispatch(removeFavorites(movie));
  }

render (){
    const  {movie,isFavourite } = this.props;
 
  return (
    <div className="movie-card">
      <div className='left'>
          <img alt='movie-poster' src={movie.Poster}/>
      </div>
      <div className='right'>
          <div className='title'>{movie.Title}</div>
          <div className='Plot'>{movie.Plot}</div>
          <div className='footer'>
              <div className='rating'>{movie.idmbRating}</div>

             {
               isFavourite
               ? <button className='unfavourite-btn' onClick={this.handleUnFavouriteClick}>unfavourite</button>
               : <button className='favourite-btn' onClick={this.handleFavouriteClick}>favourite</button>
             }

             
          </div>
      </div>

    </div>
  );

}

  
}

export default MovieCard;
