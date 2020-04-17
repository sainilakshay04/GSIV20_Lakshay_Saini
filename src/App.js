import React from 'react';
import Landing from './components/Landing'
import {HashRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/" component={Landing} />
    </Router>
    </div>
  );
}

export default App;
