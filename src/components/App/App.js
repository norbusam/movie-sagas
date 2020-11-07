import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
// components
import List from '../List/List';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/addmovie">Add</Link></li>
          <Route exact path = '/' component={List}/>
          <Route path = '/details' component={Details}/>
          <Route path = '/addmovie' component={AddMovie}/>
        </Router>
      </div>
    );
  }
}

export default App;
