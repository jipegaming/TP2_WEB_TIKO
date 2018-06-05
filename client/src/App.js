import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Carriere from './components/layouts/Carriere';
import Reseaux from './components/layouts/Reseaux';
import Projets from './components/layouts/Projets';
import Footer from './components/layouts/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Carriere />
          <Reseaux />
          <Projets />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
