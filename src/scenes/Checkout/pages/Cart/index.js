import React, { Component } from 'react'
import { connect } from 'react-redux'

import Section from '../../components/Section'
import Block from '../../components/Block'
import CartBox from '../../components/CartBox'

import TotalBox from '../../components/TotalBox'
import ButtonBox from '../../components/ButtonBox'

import * as PageActions from '../../../../store/actions/page'

class Cart extends Component {
  handleButtonBox(dispatch) {
    dispatch(PageActions.changePage('Payment'))
  }

  render() {
    const { dispatch } = this.props

    return (
      <Section caption="Produtos">
        <Block className="cart">
          <CartBox />
        </Block>
        <TotalBox />
        <ButtonBox
          caption={'Seguir para pagamento'}
          page={'Payment'}
          onClick={() => {
            this.handleButtonBox(dispatch)
          }}
        />
      </Section>
    )
  }
}

export default connect(state => ({}))(Cart)
