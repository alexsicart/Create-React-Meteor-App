import React, { Component } from 'react';
import './app.css';

class app extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default app;
