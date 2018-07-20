import React, { Component } from 'react';

class CartPrice extends Component {
    render() {
        const { data: { discount, shippingTotal, subTotal, total } } = this.props;
        const totalPriceArr = [subTotal, shippingTotal, discount, total];
        const totalTitles = ["produtos", "frete", "desconto", "total"];

        return totalPriceArr.map((info, index) => (
            <div key={index}>
                <p>{totalTitles[index]}</p>
                <span></span>
                <p>{info}</p>
            </div>
        ))
    }   
}

export default CartPrice;