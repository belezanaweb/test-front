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
    const { dispatch } = this.props

    return (
      <Container>
        <Button
          onClick={() => {
            dispatch(this.changePage())
          }}
        >
          Seguir para o pagamento
        </Button>
      </Container>
    )
  }
}

export default connect(state => ({}))(ButtonBox)
