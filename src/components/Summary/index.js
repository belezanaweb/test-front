import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Loader from '../Loader'
import Detail from './Detail'

import { Container } from './styles'

const Summary = ({ summary: { subTotal, shippingTotal, discount, total }, isFetching }) => (
  <Container>
    {isFetching ? (
      <Loader />
    ) : (
      <Fragment>
        <Detail title='Produtos' value={subTotal} />
        <Detail title='Frete' value={shippingTotal} />
        <Detail title='Desconto' value={`- ${discount}`} isHighlight />
        <Detail title='Total' value={total} isBold />
      </Fragment>
    )}
  </Container>
)

Summary.propTypes = {
  summary: PropTypes.shape({
    subTotal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    shippingTotal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired,
  isFetching: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  summary: state.basket.products.summary,
  isFetching: state.basket.isFetching
})

export default connect(mapStateToProps)(Summary)
