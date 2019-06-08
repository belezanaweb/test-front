import React, { Component } from 'react'

//components
import Flash from './components/Flash'
import Header from './components/Header'

//styles
import { Container } from './styles'
import TotalBox from './components/TotalBox'
import ButtonBox from './components/ButtonBox'

import { connect } from 'react-redux'

//pages
import Page from './pages'
class Checkout extends Component {
  render() {
    const { page } = this.props
    return (
      <Container>
        <Flash />
        <Header />
        <Page component={page} />
        <TotalBox />
        <ButtonBox />
      </Container>
    )
  }
}

export default connect(state => ({
  page: state.page.page
}))(Checkout)
