import React, { Component } from 'react'

import { Container } from './styles'

//components
import Flash from '../../components/Flash'
import Header from '../../components/Header'

import Section from '../../components/Section'
import Block from '../../components/Block'
import CartBox from '../../components/CartBox'

import ResultBox from '../../components/ResultBox'

import TotalBox from '../../components/TotalBox'

import { General } from '../../styles'

import { connect } from 'react-redux'

class Conclusion extends Component {
  hideNumber(str) {
    try {
      var n = str.lastIndexOf('.')
      var number = str.replace(/[0-9]/g, '*')
      var final_number = number.substr(0, n) + str.substr(n)
      return final_number
    } catch (e) {
      return 0
    }
  }
  render() {
    const { card } = this.props
    return (
      <General>
        <Flash />
        <Header />

        <Container>
          <ResultBox icon="check" text="Compra efetuada com sucesso" />

          <Section caption="Pagamento" className={'forceFull'}>
            <Block>
              <p className="simple">
                {this.hideNumber(card.cardnumber)}
                <br />
                {card.cardname}
                <br />
                {card.cardvalidity}
              </p>
            </Block>
          </Section>

          <Section className="content" caption="Produtos">
            <Block>
              <CartBox condensed={true} />
            </Block>

            <TotalBox />
          </Section>
        </Container>
      </General>
    )
  }
}

export default connect(state => ({
  card: state.card.data
}))(Conclusion)
