import React, { Component } from 'react';
import './ProductListItem.css';
import placeHolderImage from '../Assets/Images/placeholder64x64.png';
import intlUtils from '../Intl.Utils'

class ProductListItem extends Component {
  render() {
    const { image, name, price, compactMode, locale, currency } = this.props;

    const isInCompactMode = compactMode !== false;
    return(<div className={isInCompactMode ? "product-item-compact" : "product-item"}>
      <div className="product-item-image">
        <img src={image === undefined ? placeHolderImage : image} alt={name} />
      </div>
      <div className="product-item-info">
        <p className="product-item-name">{name === undefined ? 'Product name' : name}</p>
        {isInCompactMode ? "" : <span className="product-item-price">{
          intlUtils.formatCurrency(
            locale === undefined ? "pt-br" : locale,
            currency === undefined ? 'brl' : currency,
            price === undefined ? 0 : price)
        }</span>}
      </div>
    </div>);
  }
}

export default ProductListItem;
