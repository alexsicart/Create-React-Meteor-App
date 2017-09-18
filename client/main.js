import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
const App = () => {
  return (
    <div>
      <App />
    </div>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
