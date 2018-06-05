import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="nav fixedTop" >

        <div className="nav float-left">
          <a className="nav-link active" href="#TopPage">Etude</a>
        </div>

        <div className="nav float-right">
          <ul>
            <li className="nav-item">
              <a className="nav-link active" href="#Carriere">Carrière</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Reseaux">Réseaux</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projets">Projets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contacts">Contacts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Portfolio">Portfolio</a>
            </li>
          </ul>
        </div>

      </div>
    )
  }
}

export default Navbar;
