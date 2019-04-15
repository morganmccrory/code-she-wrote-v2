import React, { Component } from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import logo from '../code-she-wrote.jpg';
import './TopNavbar.css';

class TopNavbar extends Component {
  render() {
    return (
      <Navbar fluid staticTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <img src={logo} className="logo" alt="code-she-wrote" />
          <Nav>
            <NavItem eventKey={1} href="#">
              Link One
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link Two
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbar;
