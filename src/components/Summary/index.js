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
    subTotal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    shippingTotal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired
}

const mapStateToProps = state => ({
  summary: state.cart.products.summary
})

export default connect(mapStateToProps)(Summary)
