import React, { Component } from 'react'

import Section from '../../components/Section'
import Block from '../../components/Block'
import CartBox from '../../components/CartBox'

import TotalBox from '../../components/TotalBox'
import ButtonBox from '../../components/ButtonBox'

export default class Cart extends Component {
  render() {
    return (
      <Section caption="Produtos">
        <Block className="cart">
          <CartBox />
        </Block>
        <TotalBox />
        <ButtonBox />
      </Section>
    )
  }
}
