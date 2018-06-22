import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Component from '../components/Payment'

import { setPayment } from '../actions'

const mapStateToProps = (state) => ({
  cart: state.cart,
  format: state.format
})

const mapDispatchToProps =  ({
  setPayment
})

const Payment = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default withRouter(Payment)
