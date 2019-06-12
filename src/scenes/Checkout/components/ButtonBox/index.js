import React, { Component } from 'react'

import { Container, Button } from './styles'

import { connect } from 'react-redux'

class ButtonBox extends Component {
  changePage(page) {
    return {
      type: 'CHANGE_PAGE',
      page: page
    }
  }

  render() {
    const { dispatch, caption, page, onClick, active } = this.props

    return (
      <Container>
        <Button onClick={onClick} className={active ? '' : 'disabled'}>
          {caption}
        </Button>
      </Container>
    )
  }
}

export default connect(state => ({}))(ButtonBox)
