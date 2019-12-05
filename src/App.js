import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import ProductList from './Components/ProductList'

class App extends Component {
  render() {

    let productList = [];
    for(let i = 0; i < 3; i ++) {
      productList.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel fringilla nulla, eu eleifend arcu. Vivamus auctor et arcu tristique euismod. Aenean laoreet tincidunt nunc.");
    }

    return (
      <div className="App">
        <Header selected="cart" />
        <ProductList products={productList} />
      </div>
    );
  }
}

export default App;
