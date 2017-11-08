import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Homepage from './pages/Homepage';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Homepage />
      </div>
    );
  }
}

export default App;
