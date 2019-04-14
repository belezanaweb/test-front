import React from 'react'
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux'

const CartItemList = ({ items }) =>
  <div>
    {items.map(item =>
      <CartItem
        key={item.product.sku}
        name={item.product.name}
        thumb={item.product.imageObjects[0].thumbnail}
        price={item.product.priceSpecification.price}
      />
    )}
  </div>

const mapStateToProps = state => ({
  items: state.cart.cartItems,
})

export default connect(mapStateToProps)(CartItemList)
