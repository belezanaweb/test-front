import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as CartActions } from '../../store/ducks/cart'

class Cart extends React.Component {
  state = {}

  componentWillMount() {
    const { fetchRequest } = this.props
    fetchRequest()
  }

  render() {
    return <h1>Cart page</h1>
  }
}

const mapStateToProps = ({ cart }) => ({ cart })
const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
