import React, { Component } from 'react'
import DetailsHeader from './DetailsHeader'
import axios from 'axios'
import apiKey from '../API_KEY'
export class MovieDetails extends Component {
   state={
       title:'',
       rating:'',
       year:''
   }
   componentDidMount(){
       axios.get('https://api.themoviedb.org/3/movie/'+this.props.match.params.id+'?api_key='+apiKey+'&language=en-US')
           .then(resp => {
               this.setState({
                   title:resp.data.original_title,
                   rating:resp.data.vote_average,
                   year:resp.data.release_date,
                   poster_path:'https://image.tmdb.org/t/p/w500/'+resp.data.backdrop_path,
                   length:resp.data.runtime,
                   director:resp.data.production_companies[0].name,
                   description:resp.data.overview
               })
           });
       axios.get('https://api.themoviedb.org/3/movie/'+this.props.match.params.id+'/credits?api_key='+apiKey)
       .then(resp => {
           this.setState({
               cast:resp.data.cast[0].name + ', ' + resp.data.cast[1].name + ', ' +resp.data.cast[2].name
           })
       });
   }
   render() {
       return (
           <div>
               <DetailsHeader id={this.props.match.params.id}/>
               <div className="movieDetailsContainer">
                   <div className="movie-thumb">
                       <img src={this.state.poster_path} alt="movie poster"/>
                   </div>
                   <div className="movie-info-container">
                       <div className="movie-info-row">
                           <span className="movie-info-title">{this.state.title}</span>
                           <span className="movie-info-rating"> ({this.state.rating})</span>
                       </div>
                       <div className="movie-info-row">
                           <span>{this.state.year.split('-')[0]} | {this.state.length} minutes | {this.state.director} | {this.state.cast}</span>
                       </div>
                       <div className="movie-info-row">
                           <span>Description: {this.state.description}</span>
                       </div>
                   </div>
               </div>
           </div>
       )
   }
}

export default MovieDetails
