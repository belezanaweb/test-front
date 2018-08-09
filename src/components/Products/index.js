import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Product from './Product'

const Products = ({ products }) => (
  <ul>
    {products.map(product => (
      <Product key={product.sku} {...product} />
    ))}
  </ul>
)

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      sku: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.string
    })
  ).isRequired
}

const mapStateToProps = state => ({
  products: state.cart.products.items
})

export default connect(mapStateToProps)(Products)
