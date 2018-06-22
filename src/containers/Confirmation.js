import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Component from '../components/Confirmation'

const mapStateToProps = (state) => ({
  items: state.cart
})

const mapDispatchToProps =  ({
})

const Confirmation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default withRouter(Confirmation)
