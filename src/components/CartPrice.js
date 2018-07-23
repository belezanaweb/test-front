import React, { Component } from 'react';
import formatMoney from '../services/formatMoney'
import '../styles/cartPrice.scss';

class CartPrice extends Component {
    render() {
        console.log(this.props.data)
        const { data: { discount, shippingTotal, subTotal, total } } = this.props;
        const totalPriceArr = [subTotal, shippingTotal, discount, total];
        const totalTitles = ["produtos", "frete", "desconto", "total"];

        return (
            <section className="cart-price">
                {totalPriceArr.map((info, index) => (
                    <div key={index} className="cart-price__item">
                        <p className="cart-price__key">{totalTitles[index]}</p>
                        <span></span>
                        <p className="cart-price__value">{info == discount ? `- R$ ${formatMoney(info).replace('.', ',')}` : `R$ ${formatMoney(info).replace('.', ',')}`}</p>
                    </div>
                ))}
            </section>
        )
    }   
}

export default CartPrice;