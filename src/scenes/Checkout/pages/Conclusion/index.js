import React, { Component } from 'react'

import { Container } from './styles'

import Section from '../../components/Section'
import Block from '../../components/Block'
import CartBox from '../../components/CartBox'

import ResultBox from '../../components/ResultBox'

export default class Conclusion extends Component {
  render() {
    return (
      <Container>
        <ResultBox icon="check" text="Compra efetuada com sucesso" />

        <Section caption="Pagamento">
          <Block>
            <p className="simple">
              ****.****.****.1234
              <br />
              JOSÉ DA SILVA
              <br />
              05/2019
            </p>
          </Block>
        </Section>

        <Section className="content" caption="Produtos">
          <Block>
            <CartBox condensed={true} />
          </Block>
        </Section>
      </Container>
    )
  }
}
