import React, { Component } from 'react';
import '../styles/cartProducts.scss';

class CartProducts extends Component {
    render() {
        const { data } = this.props;
        
        if (data.items && data.items.length) {
            return data.items.map(item => (
                <article key={item.product.sku} className="cart-products__item">
                    <div className="cart-products__image">
                        <img src={item.product.imageObjects[0].thumbnail} alt={item.product.name} />
                    </div>
                    <div className="cart-products__info">
                        <h3>{item.product.name}</h3>
                        <h4>{`R$ ${item.product.priceSpecification.price}`}</h4>
                    </div>
                </article>
            ))
        }
        return <div>Loading...</div>
    }
}

export default CartProducts;