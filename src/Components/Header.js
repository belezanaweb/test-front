import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  state = {
    navBarItems: [
      {
        key: "cart",
        text: "Sacola"
      },
      {
        key: "payment",
        text: "Pagamento"
      },
      {
        "key": "confirmation",
        text: "Confirmação"
      }
    ]
  }

  render() {
    return(<header className="App-header">
      <nav className="App-navbar">
        <ul>
          {this.state.navBarItems.map((navItem) => (
            <li key={navItem.key} className={navItem.key === this.props.selected ? 'selected' : ''}>
              <a href="#">{navItem.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>);
  }
}

export default Header;
