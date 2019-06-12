import React, { Component } from 'react'
import { connect } from 'react-redux'

//components
import Flash from '../../components/Flash'
import Header from '../../components/Header'

import Section from '../../components/Section'
import Block from '../../components/Block'
import CartBox from '../../components/CartBox'

import TotalBox from '../../components/TotalBox'
import ButtonBox from '../../components/ButtonBox'

import * as PageActions from '../../../../store/actions/page'

import { General } from '../../../Checkout/styles'

class Cart extends Component {
  handleButtonBox(dispatch) {
    dispatch(PageActions.changePage('Payment'))
    this.props.history.push('/payment')
  }

  render() {
    const { dispatch } = this.props

    return (
      <General>
        <Flash />
        <Header />
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
      </General>
    )
  }
}

export default connect(state => ({}))(Cart)
