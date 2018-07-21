import React, { Component } from 'react';
import '../styles/cartPrice.scss';

class CartPrice extends Component {
    render() {
        const { data: { discount, shippingTotal, subTotal, total } } = this.props;
        const totalPriceArr = [subTotal, shippingTotal, discount, total];
        const totalTitles = ["produtos", "frete", "desconto", "total"];

        return totalPriceArr.map((info, index) => (
            <div key={index} className="cart-price__item">
                <p className="cart-price__key">{totalTitles[index]}</p>
                <span></span>
                <p className="cart-price__value">{`R$ ${info}`}</p>
            </div>
        ))
    }   
}

export default CartPrice;