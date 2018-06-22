import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { setCartItems } from '../actions'

import Component from '../components/Bag'

const mapStateToProps = (state) => ({
  cart: state.cart,
  format: state.format
})

const mapDispatchToProps =  ({
  setCartItems
})

const Bag = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default withRouter(Bag)
