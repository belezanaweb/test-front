import React, { Component } from 'react';
import './Product.css';
import placeHolderImage from '../Assets/Images/placeholder64x64.png';

class Product extends Component {
  render() {
    return(<div className="product-item">
      <img className="product-item-image" src={this.props.image === undefined ? placeHolderImage : this.props.image} alt={this.props.name} />
      <div className="product-item-info">
        <p className="product-item-name">{this.props.name === undefined ? 'Product without name' : this.props.name}</p>
        <span className="product-item-price">R$ {this.props.price === undefined ? '0,0' : this.props.price.toFixed(2).replace('.', ',')}</span>
      </div>
    </div>);
  }
}

export default Product;
