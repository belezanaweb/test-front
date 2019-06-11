import React, { Component } from 'react'

import { Container, Button } from './styles'

import { connect } from 'react-redux'

class ButtonBox extends Component {
  changePage() {
    return {
      type: 'CHANGE_PAGE',
      page: 'Payment'
    }
  }
  render() {
    const { dispatch, caption, onClick } = this.props

    return (
      <Container>
        <Button onClick={onClick}>{caption}</Button>
      </Container>
    )
  }
}

export default connect(state => ({}))(ButtonBox)
