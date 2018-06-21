import React, { Component } from 'react';
import './App.css';
import Navigation from './components/layouts/Navigation';
import Carriere from './components/layouts/Carriere';
import Reseaux from './components/layouts/Reseaux';
import Projets from './components/layouts/Projets';
import Footer from './components/layouts/Footer';
import Contact from './components/layouts/Contact';
import Porfolio from './components/layouts/Portfolio';

class App extends Component {
  render() {
    return (
      <div id="top-page">
        <Navigation />
        <Carriere />
        <Reseaux />
        <Projets />
        <Porfolio />
        <Contact />
        <Footer/>
      </div>
    );
  }
}

export default App;
