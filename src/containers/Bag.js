import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { addCartItem } from '../actions'

import Component from '../components/Bag'

const mapStateToProps = (state) => ({
  items: state.cart
})

const mapDispatchToProps =  ({
  addCartItem
})

const Bag = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default withRouter(Bag)
