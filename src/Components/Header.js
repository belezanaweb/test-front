import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return(<header className="App-header">
      <nav className="App-navbar">
        <ul>
          {this.props.navItems === undefined ? null : this.props.navItems.map((navItem) => (
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
