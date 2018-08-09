import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getProducts } from '../../store/ducks/cart'

class Main extends PureComponent {
  async componentDidMount () {
    await this.props.getProducts()
  }

  render () {
    const { children } = this.props

    return <Fragment>{children}</Fragment>
  }
}

Main.propTypes = {
  getProducts: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired
}

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts())
})

export default connect(
  null,
  mapDispatchToProps
)(Main)
