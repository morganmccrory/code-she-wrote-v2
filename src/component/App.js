import React, { Component } from 'react';
import TopNavbar from './TopNavbar';
import logo from '../code-she-wrote-2.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
        <header className="logo-header">
          <img src={logo} className="logo" alt="code-she-wrote" />
        </header>
      </div>
    );
  }
}

export default App;
