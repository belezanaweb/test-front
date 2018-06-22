import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Component from '../components/Payment'

const mapStateToProps = (state) => ({
  items: state.cart
})

const mapDispatchToProps =  ({
})

const Payment = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default withRouter(Payment)
