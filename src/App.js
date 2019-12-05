import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import ProductList from './Components/ProductList'

class App extends Component {
  render() {

    let productList = [];
    for(let i = 0; i < 3; i ++) {
      productList.push("L'Oreal Professionnel Expert Absolut Repair Cortex Lipidium");
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
