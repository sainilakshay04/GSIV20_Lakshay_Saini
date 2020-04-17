import React,{Component} from 'react'
import SearchBar from './SearchBar'
import {fetchMovies, searchMovie} from '../actions/landingAction'
import MovieCard from './MovieCard'
import {connect} from 'react-redux'

class Landing extends Component {
  componentDidMount(){
    this.props.fetchMovies();
  }
  handleSubmit =(e)=>{
       if(e.keyCode===13){
           this.props.searchMovie(e.target.value);
       }
   }
  render() {
       const movies = this.props.results.map(function(item){
           return <MovieCard id={item.id} key={item.id} title={item.title} path={'https://image.tmdb.org/t/p/w500/'+item.poster_path} rating={item.vote_average} overview={item.overview}/>
       })
       return (
           <div className="container">
               <SearchBar handleSubmit={this.handleSubmit}/>
               <div className="moviesContainer">{movies}</div>
           </div>
       )
   }



}
const mapStateToProps = store => ({
   results:store.landing.results
});
export default connect(mapStateToProps, { fetchMovies, searchMovie })(Landing);
