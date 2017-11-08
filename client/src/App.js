import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Homepage from './pages/Homepage';
import Article from './pages/Article';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/article" component={Article} />
          </div>
      </Router>
    );
  }
}

export default App;
