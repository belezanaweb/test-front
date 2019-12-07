import React, { Component } from 'react';
import Header from '../../Components/Header'
import './Master.css';

class Master extends Component {
  render() {
    return(
      <div className="app-container">
        <Header selected="cart" />
        <div className="app-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Master;
