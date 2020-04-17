import React from 'react';
import Landing from './components/Landing'
import MovieDetails from './components/MovieDetails'
import {HashRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/movie/:id" component={MovieDetails} />
    </Router>
    </div>
  );
}

export default App;
