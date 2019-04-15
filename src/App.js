import React, { Component } from 'react';
import TopNavbar from './topnav/TopNavbar';
import Footer from './footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
        <Footer />
      </div>
    );
  }
}

export default App;
