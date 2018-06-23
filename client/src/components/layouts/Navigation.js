import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap/lib';


class Navigation extends Component {
  render() {
    return (

      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <img src="assets/logo-white.png" />
          </Navbar.Brand>
          <Navbar.Brand>
            <a style={{ paddingRight: 10 }} href="#top-page">Tikko - Études Projets d'Architecture</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>

          <Nav pullRight>
            <NavItem href="#carriere">
              Carrière
            </NavItem>
            <NavItem href="#reseaux">
              Réseaux
            </NavItem>
            <NavItem href="#portfolio">
              Portfolio
            </NavItem>
            <NavItem href="#contact">
              Contacts
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

export default Navigation;
