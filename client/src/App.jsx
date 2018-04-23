import React, { Component } from 'react';
import './App.css';
import './index.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/CustomNavbar';
import Home from './components/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Login from './Login/Login';
import Cart from './components/Cart/Cart.jsx'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/products' component={Products} />
          <Route path='/login' component={Login} />
          <Route path='/cart' component={Cart} />
        </div>
      </Router>
    );
  }
}

export default App;
