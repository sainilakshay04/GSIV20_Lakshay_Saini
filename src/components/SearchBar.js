import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state={
      input:''
    }
  }
  handleInput=(e)=>{
    this.setState({
      input:e.target.value
    })
  }
  render(){
    return(
      <div className="searchBarContainer">
        <i className="material-icons search-ico">search</i>
        <input type="text" placeholder="Search..." id="searchQuery" onChange={this.handleInput.bind(this)} value={this.state.input} onKeyDown={this.props.handleSubmit.bind(this)}></input>
        <Link to="/"><i className="material-icons home-ico">home</i></Link>
      </div>
    )
  }
}
