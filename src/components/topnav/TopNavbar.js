import React, { Component } from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import NavItem from 'react-bootstrap/lib/NavItem';
import './TopNavbar.scss';

class TopNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect bg="white" expand="sm">
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="justify-content-center" >
            <NavItem href="#">About</NavItem>
            <NavItem href="#">Blog</NavItem>
            <NavItem href="#">Talks</NavItem>
            <NavItem href="#">Contact</NavItem>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    );
  }
}

export default TopNavbar;
