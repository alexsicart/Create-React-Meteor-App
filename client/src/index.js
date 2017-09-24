import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.js';
import registerServiceWorker from './registerServiceWorker';

const Index = () => {
  return (
    <div>
      <App />
    </div>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<Index />, document.querySelector('.container'));
  registerServiceWorker();
});
