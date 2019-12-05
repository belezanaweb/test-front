import React, {Component} from 'react';
import Product from './Product'
import './ProductList.css';

class ProductList extends Component {
  render() {
    // Default List is initialized as an empty Array
    let productList = [];

    if(this.props.products !== undefined) {
      if(Array.isArray(this.props.products)) {
        for(let i = 0; i < this.props.products.length; i ++) {
          productList.push(<Product key={i} name={this.props.products[i]} price={(Math.random() * 999 + 1)} />)
        }
      }
    }

    return(<section className="product-list">
      <p className="product-list-title">Produtos</p>
      <div className="product-list-container">
        {productList}
      </div>
    </section>);
  }
}

export default ProductList;
