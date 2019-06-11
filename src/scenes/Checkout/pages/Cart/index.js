import React, { Component } from 'react'

//components
import Flash from '../../components/Flash'
import Header from '../../components/Header'

import Section from '../../components/Section'
import Block from '../../components/Block'
import CartBox from '../../components/CartBox'

import TotalBox from '../../components/TotalBox'
import ButtonBox from '../../components/ButtonBox'

import { General } from '../../styles'

export default class Cart extends Component {
  handleButtonBox() {
    this.props.history.push('/payment')
  }
  render() {
    return (
      <General>
        <Flash />
        <Header />
        <Section caption="Produtos">
          <Block className="cart">
            <CartBox />
          </Block>
          <TotalBox />
          <ButtonBox caption={'Seguir para pagamento'} onClick={() => this.handleButtonBox()} />
        </Section>
      </General>
    )
  }
}
