import React, { Component } from 'react'

//components
import Flash from './components/Flash'
import Header from './components/Header'

//styles
import { Container } from './styles'
import TotalBox from './components/TotalBox'
import ButtonBox from './components/ButtonBox'

//pages
import Page from './pages'
export default class Checkout extends Component {
  render() {
    return (
      <Container>
        <Flash />
        <Header />
        <Page component={'Cart'} />
        <TotalBox />
        <ButtonBox />
      </Container>
    )
  }
}
