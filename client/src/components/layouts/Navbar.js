import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return ( 

        <ul className="nav fixedTop">
            <li className="nav-item">
              <a className="nav-link active" href="#Carriere">Carrière Professionnelle</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Reseaux">Réseaux Professionnels</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projets">Projets Futurs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contacts">Contacts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Portfolio">Portfolio</a>
            </li>
          </ul>
        )
    }
}

export default Navbar;
