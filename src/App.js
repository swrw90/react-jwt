import React, { Component } from 'react';
import './App.css';
import LoginPage from './LoginPage/LoginPage';
import HomePage from './HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <LoginPage />
        <HomePage />
      </div>
    );
  }
}

export default App;
