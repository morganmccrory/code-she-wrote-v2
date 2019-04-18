import React, { Component } from 'react';
import TopNavbar from '../topnav/TopNavbar';
import Footer from '../footer/Footer';
import logo from '../../assets/images/code-she-wrote.jpg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<link rel="stylesheet"
      		href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      		integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      		crossOrigin="anonymous"
		/>
        <img src={logo} className="logo" alt="code-she-wrote" />
        <Footer />
      </div>
    );
  }
}

export default App;
