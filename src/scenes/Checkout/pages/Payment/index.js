import React, { Component } from 'react'

import Section from '../../components/Section'
import Block from '../../components/Block'

import { Container, InputGroup, Input, Label } from './styles'

import TotalBox from '../../components/TotalBox'
import ButtonBox from '../../components/ButtonBox'

export default class Payment extends Component {
  render() {
    return (
      <Section caption="Cartão de Crédito">
        <Block>
          <Container>
            <InputGroup>
              <Label>Número do cartão:</Label>
              <Input placeholder="____.____.____.____" data-type="number" />
            </InputGroup>

            <InputGroup>
              <Label>Nome do Titular:</Label>
              <Input placeholder="Como no cartão" />
            </InputGroup>

            <InputGroup className="validity">
              <Label>Validade (mês/ano):</Label>
              <Input placeholder="__/____" data-type="number" />
            </InputGroup>

            <InputGroup className="cvv">
              <Label>CVV:</Label>
              <Input placeholder="___" data-type="number" />
            </InputGroup>
          </Container>
        </Block>

        <TotalBox />
        <ButtonBox />
      </Section>
    )
  }
}
