import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap/lib';

class Navigation extends Component {
  render() {
    return (

      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a style      = {{ paddingRight: 10 }} href = "#top-page">Études Projets d'Architecture</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>

          <Nav pullRight>
            <NavItem href = "#carriere">
              Carrière
            </NavItem>
            <NavItem href = "#reseaux">
              Réseaux
            </NavItem>
            <NavItem href = "#projets">
              Projets
            </NavItem>
            <NavItem href = "#contacts">
              Contacts
            </NavItem>
            <NavItem href = "#portfolio">
              Portfolio
            </NavItem>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

export default Navigation;
