import React,{Component} from 'react'
import SearchBar from './SearchBar'
import {fetchMovies} from '../actions/landingAction'
import {connect} from 'react-redux'

class Landing extends Component {
  componentDidMount(){
    this.props.fetchMovies();
  }
  render(){
    return(
      <div className="container">
        <SearchBar />
      </div>
    )
  }
}
const mapStateToProps = store => ({
   results:store.landing.results
});
export default connect(mapStateToProps, { fetchMovies })(Landing);
