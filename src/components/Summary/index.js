import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Detail from './Detail'

import { Container } from './styles'

const Summary = ({ summary: { subTotal, shippingTotal, discount, total } }) => (
  <Container>
    <Detail title='Produtos' value={subTotal} />
    <Detail title='Frete' value={shippingTotal} />
    <Detail title='Desconto' value={`- ${discount}`} isHighlight />
    <Detail title='Total' value={total} isBold />
  </Container>
)

Summary.propTypes = {
  summary: PropTypes.shape({
    subTotal: PropTypes.string,
    shippingTotal: PropTypes.string,
    discount: PropTypes.string,
    total: PropTypes.string
  }).isRequired
}

const mapStateToProps = state => ({
  summary: state.cart.products.summary
})

export default connect(mapStateToProps)(Summary)
