import React, { Component } from 'react';
import { render } from 'react-dom';
import { router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import logo from './logo.svg';
import './App.css';

const history = createBrowserHistory(); 

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
