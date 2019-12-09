import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    const { navItems } = this.props;

    return(<header className="App-header">
      <nav className="App-navbar">
        <ul>
          {navItems === undefined ? null : navItems.map((navItem) => (
            <li key={navItem.key}>
              <NavLink activeClassName="selected" to={navItem.url}>{navItem.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>);
  }
}

export default Header;
