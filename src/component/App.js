import React, { Component } from 'react';
import TopNavbar from './TopNavbar';
import logo from '../codeshewrote.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
        <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
          Coming soon.
        </header>
      </div>
    );
  }
}

export default App;
