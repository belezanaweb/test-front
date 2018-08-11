import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Loader from '../Loader'
import Product from './Product'

const Products = ({ products, isFetching, isFinish }) => (
  <ul>
    {isFetching ? (
      <Loader />
    ) : (
      products.map(product => <Product key={product.sku} {...product} isFinish={isFinish} />)
    )}
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
  isFetching: PropTypes.bool.isRequired,
  isFinish: PropTypes.bool
}

const mapStateToProps = state => ({
  products: state.basket.products.items,
  isFetching: state.basket.isFetching
})

export default connect(mapStateToProps)(Products)
