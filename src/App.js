import React, { Component } from 'react';
import './App.css';
import './SharedComponents.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="App-navbar">
            <ul>
              <li className="selected">sacola</li>
              <li>pagamento</li>
              <li>confirmação</li>
            </ul>
          </nav>
        </header>

        <section>
          Content
        </section>
      </div>
    );
  }
}

export default App;
