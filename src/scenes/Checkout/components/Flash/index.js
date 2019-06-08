import React, { Component } from 'react'

import { Container } from './styles'
import { connect } from 'react-redux'

class Flash extends Component {
  render() {
    return <Container className={this.props.flash ? 'active' : ''}>Falha ao carregar.</Container>
  }
}

export default connect(state => ({
  flash: state.checkout.flash
}))(Flash)
