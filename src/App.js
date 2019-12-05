import React, { Component } from 'react';
import './App.css';
import Product from './Components/Product';
import Header from './Components/Header';

class App extends Component {
  render() {
    let productList = [];

    for(let i = 0; i < 3; i ++) {
      productList.push(<Product key={i} name={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />)
    }

    return (
      <div className="App">
        <Header selected="cart" />
        <section>
          {productList}
        </section>
      </div>
    );
  }
}

export default App;
