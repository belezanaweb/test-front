import React, { Component } from 'react';

class CartProducts extends Component {
    render() {
        const { data } = this.props;
        
        if (data.items && data.items.length) {
            return data.items.map(item => (
                <article key={item.product.sku}>
                    <div>
                        <img src={item.product.imageObjects[0].thumbnail} alt={item.product.name} />
                    </div>
                    <div>
                        <h3>{item.product.name}</h3>
                        <h4>{item.product.priceSpecification.price}</h4>
                    </div>
                </article>
            ))
        }
        return <div>Loading...</div>
    }
}

export default CartProducts;