import React, { Component } from 'react'

//components
import Flash from '../../components/Flash'
import Header from '../../components/Header'

import Section from '../../components/Section'
import Block from '../../components/Block'

import { Container, InputGroup, Input, Label } from './styles'

import TotalBox from '../../components/TotalBox'
import ButtonBox from '../../components/ButtonBox'

import { General } from '../../styles'

export default class Payment extends Component {
  handleButtonBox() {
    this.props.history.push('/conclusion')
  }

  render() {
    return (
      <General>
        <Flash />
        <Header />

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
          <ButtonBox caption={'Finalizar pedido'} onClick={() => this.handleButtonBox()} />
        </Section>
      </General>
    )
  }
}
