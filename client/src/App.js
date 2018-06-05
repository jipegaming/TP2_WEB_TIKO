import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Carriere from './components/layouts/Carriere';
import Reseaux from './components/layouts/Reseaux';
import Projets from './components/layouts/Projets';
import Footer from './components/layouts/Footer';
import Contact from './components/layouts/Contact';
import Porfolio from './components/layouts/Portfolio';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carriere />
        <Reseaux />
        <Projets />
        <Porfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
