import React, {Component} from 'react';
import Product from './Product'
import './ProductList.css';

class ProductList extends Component {
  render() {
    let productList = this.props.products.items === undefined ? [] : this.props.products.items;

    return(<section className="product-list">
      <p className="product-list-title">Produtos</p>
      <div className="product-list-container">
        {productList.map((productInfo) => (
          <Product
            key={productInfo.product.sku}
            name={productInfo.product.name}
            image={productInfo.product.imageObjects[0].small}
            price={productInfo.product.priceSpecification.price}
          />
        ))}
      </div>
    </section>);
  }
}

export default ProductList;
