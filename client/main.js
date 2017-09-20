import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
const Index = () => {
  return (
    <div>
      <App />
    </div>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<Index />, document.querySelector('.container'));
});
