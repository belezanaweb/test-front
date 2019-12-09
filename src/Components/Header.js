import React, { Component } from 'react';
import './Header.css';
import { NavLink, withRouter } from 'react-router-dom';

class Header extends Component {
  render() {
    const { navItems } = this.props;
    const currentPath = this.props.location.pathname;

    return(<header className="App-header">
      <nav className="App-navbar">
        <ul>
          {navItems === undefined ? null : navItems.map((navItem) => (
            <li key={navItem.key}>
              {navItem.disabled ?
                <span className=
                        { currentPath.indexOf(navItem.url) === -1 ? "" : "selected" }
                >{navItem.text}</span>
                :
                <NavLink
                  activeClassName="selected"
                  to={navItem.url}
                  isActive={navItem.isActive === undefined ? null : navItem.isActive}>
                  {navItem.text}
                </NavLink>}
            </li>
          ))}
        </ul>
      </nav>
    </header>);
  }
}

export default withRouter(Header);
