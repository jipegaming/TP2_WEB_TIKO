import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap/lib';

class Navigation extends Component {
  render() {
    return (

      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
    </NavItem>
          <NavItem eventKey={2} href="#">
            Link
    </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
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
