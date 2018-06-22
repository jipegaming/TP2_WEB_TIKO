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
            <NavItem href = "#contact">
              Contacts
            </NavItem>
            <NavItem href = "#portfolio">
              Portfolio
            </NavItem>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

      // <div className="nav fixedTop" >

      //   <div className="nav float-left">
      //     <a className="nav-link active" href="top-page">Etude</a>
      //   </div>

      //   <div className="nav float-right">
      //     <ul>
      //       <li className="nav-item">
      //         <a className="nav-link active" href="#Carriere">Carrière</a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href="#Reseaux">Réseaux</a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href="#Projets">Projets</a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href="#Contacts">Contacts</a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href="#Portfolio">Portfolio</a>
      //       </li>
      //     </ul>
      //   </div>

      // </div>
    )
  }
}

export default Navigation;
