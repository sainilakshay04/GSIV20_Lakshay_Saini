import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class DetailsHeader extends Component {
   render() {
       return (
           <div className="searchBarContainer">
               <span className="movie-details-text">Movie Details</span>
               <Link to="/"><i className="material-icons home-ico">home</i></Link>
           </div>
       )
   }
}
