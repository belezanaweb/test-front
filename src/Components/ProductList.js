import React, {Component} from 'react';
import ProductListItem from './ProductListItem'
import './ProductList.css';
import './Text.css'
import CartPrice from './CartPrice'

class ProductList extends Component {

  render() {
    let productList = this.props.products.items === undefined ? [] : this.props.products.items;

    return(<section className="product-list">
      <p className="group-title">Produtos</p>
      <div className="product-list-container">
        {productList.map((productInfo) => (
          <ProductListItem
            key={productInfo.product.sku}
            name={productInfo.product.name}
            image={productInfo.product.imageObjects[0].small}
            price={productInfo.product.priceSpecification.price}
          />
        ))}
      </div>

      <CartPrice products={this.props.products} currency="BRL" />
    </section>);
  }
}

export default ProductList;
