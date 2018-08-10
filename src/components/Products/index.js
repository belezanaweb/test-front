import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Product from './Product'

const Products = ({ products, isFinish }) => (
  <ul>
    {products.map(product => (
      <Product key={product.sku} {...product} isFinish={isFinish} />
    ))}
  </ul>
)

Products.defaultProps = {
  isFinish: false
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      sku: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.string
    })
  ).isRequired,
  isFinish: PropTypes.bool
}

const mapStateToProps = state => ({
  products: state.cart.products.items
})

export default connect(mapStateToProps)(Products)
