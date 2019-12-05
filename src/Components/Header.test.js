import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    let items = {
      "cart": {
        selected: false,
        text: "Sacola"
      },
      "payment": {
        selected: false,
        text: "Pagamento"
      },
      "confirmation": {
        selected: false,
        text: "Confirmacao"
      }
    };

    if(items[this.props.selected] !== undefined)
      items[this.props.selected].selected = true;

    let renderedItems = [];
    let i = 0;
    for(let item in items) {
      renderedItems.push(<li key={i} className={items[item].selected ? 'selected' : ''}>
        <a href="#">{items[item].text}</a>
      </li>);
      i++;
    }

    return(<header className="App-header">
      <nav className="App-navbar">
        <ul>
          {renderedItems}
        </ul>
      </nav>
    </header>);
  }
}

export default Header;
