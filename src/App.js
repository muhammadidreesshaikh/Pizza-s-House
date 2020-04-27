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

import { 
  BrowserRouter as Router, 
  Route,
  Switch 
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <Slider />
        
          {/* all components */}
          <div>
            <Switch>
              {/* <Route exact path='/' component={Planets}></Route> */}
              <Route exact path='/home' component={Home}></Route>
              <Route exact path='/oderNow' component={OderNow}></Route>
              <Route exact path='/menu' component={Menu}></Route>
              <Route exact path='/location' component={Location}></Route>
              <Route exact path='/contact' component={Contact}></Route>
              <Route exact path='/cart' component={Cart}></Route>
            </Switch>
          </div>

        <Footer />

      </div>
    </Router>
  );
}

export default App;