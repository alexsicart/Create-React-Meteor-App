import React, { Component } from 'react';
import './app.css';

class app extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://cdn.worldvectorlogo.com/logos/react.svg" className="App-logo" alt="logo" />
          <img src="https://cdn.worldvectorlogo.com/logos/meteor-icon.svg" className="App-logo" alt="logo" />
          <h2>Welcome to React-Meteor</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default app;
