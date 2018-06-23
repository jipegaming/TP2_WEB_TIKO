import React, { Component } from 'react';
import './App.css';
import Navigation from './components/layouts/Navigation';
import Carriere from './components/layouts/Carriere';
import Reseaux from './components/layouts/Reseaux';
import Footer from './components/layouts/Footer';
import Contact from './components/layouts/Contact';
import Porfolio from './components/layouts/Portfolio';

class App extends Component {
  render() {
    const header = (
      <div style={{ backgroundImage : "url('assets/main-banner.jpg')", height: 721}} Responsive>
      </div>
    )
    return (
      <div id="top-page">
        <Navigation />
        {header}
        <Carriere />
        <Reseaux />
        <Porfolio />
        <Contact />
        <Footer/>
      </div>
    );
  }
}

export default App;
