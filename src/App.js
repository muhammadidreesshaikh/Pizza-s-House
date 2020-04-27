import React from 'react';
import './App.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Slider from './layout/Slider';
import Home from './components/Home';
import OderNow from './components/OderNow';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Location from './components/location';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">

      <Header />

      <Slider />
      <Home />
      <OderNow />
      <Menu />
      <Location />
      <Contact />
      <Cart />

      <Footer />
    </div>
  );
}

export default App;
