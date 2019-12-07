import React, {Component} from 'react';
import ProductListItem from './ProductListItem'
import './ProductList.css';
import './Text.css'
import intlUtils from '../Intl.Utils'

class ProductList extends Component {

  render() {
    let productList = this.props.products.items === undefined ? [] : this.props.products.items;
    let currency = "BRL";

    console.log(this.props.products)

    return(<section className="product-list">
      <p className="product-list-title">Produtos</p>
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

      <div className="product-list-info">
        <div>
          <span>PRODUTOS</span>
          <span>{intlUtils.formatCurrency("pt-br", currency, this.props.products.subTotal)}</span>
        </div>
        <div>
          <span>FRETE</span>
          <span>{intlUtils.formatCurrency("pt-br", currency, this.props.products.shippingTotal)}</span>
        </div>
        <div className="text-highlight">
          <span>DESCONTO</span>
          <span>- {intlUtils.formatCurrency("pt-br", currency, this.props.products.discount)}</span>
        </div>
        <div className="text-bold">
          <span>TOTAL</span>
          <span>{intlUtils.formatCurrency("pt-br", currency, (this.props.products.subTotal + this.props.products.shippingTotal) - this.props.products.discount)}</span>
        </div>
      </div>
    </section>);
  }
}

export default ProductList;
