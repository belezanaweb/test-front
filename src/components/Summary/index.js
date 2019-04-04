import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Loader from '../Loader'
import DetailSummary from './DetailSummary'

import { Container } from './style'

const Summary = ({ summary: { subTotal, shippingTotal, discount, total }, isFetching }) => (
  <Container>
    {isFetching ? (
      <Loader />
    ) : (
      <Fragment>
        <DetailSummary title='Produtos' value={subTotal} />
        <DetailSummary title='Frete' value={shippingTotal} />
        <DetailSummary title='Desconto' value={`- ${discount}`} isHighlight />
        <DetailSummary title='Total' value={total} isBold />
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
  summary: state.cart.products.summary,
  isFetching: state.cart.isFetching
})

export default connect(mapStateToProps)(Summary)