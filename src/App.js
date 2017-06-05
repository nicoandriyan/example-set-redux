import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import Header from './page/header';
import Nav from './page/Nav';
import Home from './page/Home';
import './css/main.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Header/>
          <Nav/>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
