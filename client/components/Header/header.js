import React, { Component } from 'react';

import Accounts from './accounts';
import './header.css';

class Header extends Component {

  render() {
  return (
    <nav className="nav navbar-default">
      <div className="navbar-header">
        <div className="navbar-brand">create-react-meteor-app</div>
      </div>
      <ul className="nav navbar-nav">
        <li>
          <Accounts />
        </li>
      </ul>
    </nav>
  );
}
}

export default Header;
