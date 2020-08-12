import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import About from './About';
import Home from './Home';
import Products from './Products';



export default class App extends Component {
  //vivir el state

  render() {
    return (
      <Router>
        <Route path="/products" component={Products} />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Router>
    );
  }
}
