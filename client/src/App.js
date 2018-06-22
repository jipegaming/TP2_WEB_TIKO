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
<<<<<<< HEAD
        <Footer />
=======
        <Footer/>
>>>>>>> 06a503b6f108b00bcc8be0793492e2883f2b0408
      </div>
    );
  }
}

export default App;
