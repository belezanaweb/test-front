import React, { Component } from 'react'

//components
import Flash from '../../components/Flash'
import Header from '../../components/Header'

import Section from '../../components/Section'
import Block from '../../components/Block'

import { Container, InputGroup, Input, Label } from './styles'

import TotalBox from '../../components/TotalBox'
import ButtonBox from '../../components/ButtonBox'

import * as Validations from '../../helpers/validation'

import MaskedInput from 'react-maskedinput'

import * as PageActions from '../../../../store/actions/page'
import * as CardActions from '../../../../store/actions/card'

import { connect } from 'react-redux'

import { General } from '../../../Checkout/styles'

class Payment extends Component {
  state = {
    fields: {},
    errors: {},
    validForm: false
  }

  handleValidations() {
    let fields = this.state.fields
    let formIsValid = {}
    let errors = {}

    //card number validation
    if (!Validations.validateCreditCardNumber(fields['cardnumber'])) {
      errors['cardnumber'] = 'Número do cartão inválido'
    }

    //card name validation
    if (fields['cardname'] === '' || fields['cardname'] == null) {
      errors['cardname'] = 'Nome do titular inválido'
    }

    //card cvv validation
    if (fields['cardcvv'] === '' || fields['cardcvv'] == null) {
      errors['cardcvv'] = 'CVV inválido'
    }

    //card validatity validation
    var cardvalidity = /^[0-1][0-9]\/\d{4}$/
    if (cardvalidity.test(fields['cardvalidity'])) {
      formIsValid = true
    } else {
      errors['cardvalidity'] = 'Validade inválida'
      formIsValid = false
    }

    //counting errors
    var count_errors = 0
    for (var key in errors) {
      count_errors++
    }

    //setting form status
    if (count_errors > 0) {
      formIsValid = false
    } else {
      formIsValid = true
    }
    this.setState({ errors: errors, validForm: formIsValid })
  }

  handleChange(field) {
    let fields = this.state.fields
    fields[field.target.name] = field.target.value
    this.setState({ fields })
    this.handleValidations()
  }

  handleButtonBox(dispatch) {
    dispatch(
      CardActions.storeCard({
        cardname: this.state.fields['cardname'],
        cardnumber: this.state.fields['cardnumber'],
        cardvalidity: this.state.fields['cardvalidity'],
        cardcvv: this.state.fields['cardcvv']
      })
    )
    dispatch(PageActions.changePage('Conclusion'))
    this.props.history.push('/conclusion')
  }

  render() {
    const { dispatch } = this.props
    return (
      <General>
        <Flash />
        <Header />
        <Section caption="Cartão de Crédito">
          <Block>
            <Container>
              <InputGroup>
                <Label>Número do cartão:</Label>
                <MaskedInput
                  placeholder="____.____.____.____"
                  data-type="number"
                  name="cardnumber"
                  onChange={e => this.handleChange(e)}
                  mask={'1111.1111.1111.1111'}
                />
                <span className={'error'}>{this.state.errors['cardnumber']}</span>
              </InputGroup>

              <InputGroup>
                <Label>Nome do Titular:</Label>
                <Input
                  placeholder="Como no cartão"
                  name="cardname"
                  onChange={e => this.handleChange(e)}
                />
                <span className={'error'}>{this.state.errors['cardname']}</span>
              </InputGroup>

              <InputGroup className="validity">
                <Label>Validade (mês/ano):</Label>
                <MaskedInput
                  placeholder="__/____"
                  data-type="number"
                  mask={'11/1111'}
                  name="cardvalidity"
                  onChange={e => this.handleChange(e)}
                />
                <span className={'error'}>{this.state.errors['cardvalidity']}</span>
              </InputGroup>

              <InputGroup className="cvv">
                <Label>CVV:</Label>
                <MaskedInput
                  placeholder="___"
                  data-type="number"
                  name="cardcvv"
                  mask={'111'}
                  onChange={e => this.handleChange(e)}
                />
                <span className={'error'}>{this.state.errors['cardcvv']}</span>
              </InputGroup>
            </Container>
          </Block>

          <TotalBox />
          <ButtonBox
            caption={'Finalizar o pedido'}
            active={this.state.validForm ? true : false}
            onClick={() => {
              this.handleButtonBox(dispatch)
            }}
          />
        </Section>
      </General>
    )
  }
}

export default connect(state => ({
  card: state.card
}))(Payment)
