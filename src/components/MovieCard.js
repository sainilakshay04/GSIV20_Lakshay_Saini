import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class MovieCard extends Component {
   render() {
       return (
           <div className="moviesCard">
               <Link to={'/movie/'+this.props.id}>
                   <img src={this.props.path} className="movie-poster" alt="movie poster"/>
               </Link>
               <span className="movie-title">{this.props.title}</span>
               <span className="rating-text">({this.props.rating})</span>
               <div className="movie-desc">{this.props.overview}</div>
           </div>
       )
   }
}

export default MovieCard
