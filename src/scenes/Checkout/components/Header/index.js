import React, { Component } from 'react'

import { Container, Item } from './styles'

import { connect } from 'react-redux'

class Header extends Component {
  render() {
    return (
      <Container>
        <Item active={this.props.page === 'Cart' ? true : false}>Sacola</Item>
        <Item active={this.props.page === 'Payment' ? true : false}>Pagamento</Item>
        <Item active={this.props.page === 'Conclusion' ? true : false}>Confirmação</Item>
      </Container>
    )
  }
}

export default connect(state => ({
  page: state.page.page
}))(Header)
