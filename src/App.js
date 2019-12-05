import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import ProductList from './Components/ProductList'

class App extends Component {
  state = {
    apiResult: []
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then(response => response.json())
      .then(info => {
        this.setState({
          apiResult: info
        })
      }).catch(alert);
  }

  render() {
    return (
      <div className="App">
        <Header selected="cart" />
        <ProductList products={this.state.apiResult === undefined ? [] : this.state.apiResult} />
      </div>
    );
  }
}

export default App;
