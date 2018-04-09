import React, { Component } from 'react';
import './App.css';
import './index.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/CustomNavbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Login from './components/auth/Login';


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
        </div>
      </Router>
    );
  }
}

export default App;
