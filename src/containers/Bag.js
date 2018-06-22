import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { setCartItems } from '../actions'

import Component from '../components/Bag'

const mapStateToProps = (state) => ({
  items: state.cart
})

const mapDispatchToProps =  ({
  setCartItems
})

const Bag = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default withRouter(Bag)
