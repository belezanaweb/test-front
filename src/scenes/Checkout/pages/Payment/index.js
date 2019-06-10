import React, { Component } from 'react'

import Section from '../../components/Section'
import Block from '../../components/Block'

import { Container, InputGroup, Input, Label } from './styles'

import TotalBox from '../../components/TotalBox'
import ButtonBox from '../../components/ButtonBox'

import { validateCreditCardNumber } from '../../helpers/validation'

import MaskedInput from 'react-maskedinput'

class Payment extends Component {
  state = {
    fields: {
      name: null,
      email: null,
      cardnumber: null
    },
    errors: {},
    validForm: false
  }

  handleValidations() {
    let fields = this.state.fields
    let formIsValid = true
    let errors = {}

    if (fields['name'] === '' && fields['name'] != null) {
      formIsValid = false
      errors['name'] = 'Nome não pode ser vazio'
      //console.log('invalid name')
    }

    if (fields['email'] === '' && fields['email'] != null) {
      formIsValid = false
      errors['email'] = 'E-mail não pode ser vazio'
      //console.log('invalid email')
    }

    if (fields['cardnumber'] != null) {
      if (this.validateCreditCardNumber(fields['cardnumber'])) {
        console.log('valid cardnumber')
      } else {
        console.log('invalid cardnumber')
        formIsValid = false
        errors['cardnumber'] = 'Número do cartão inválido'
      }
    }

    if (fields['cardname'] === '' && fields['cardname'] != null) {
      formIsValid = false
      errors['cardname'] = 'Nome do titular inválido'
      //console.log('invalid cardname')
    }

    if (fields['cardcvv'] === '' && fields['cardcvv'] != null) {
      formIsValid = false
      errors['cardcvv'] = 'CVV inválido'
      //console.log('invalid cardcvv')
    }

    if (fields['cardvalidity'] != null) {
      var cardvalidity = /^[0-1][0-9]\/\d{4}$/
      if (cardvalidity.test(fields['cardvalidity'])) {
        console.log('valid cardcvv')
      } else {
        console.log('invalid cardcvv')
        errors['cardvalidity'] = 'Validade inválida'
      }
      formIsValid = false
    }

    this.setState({ errors: errors, validForm: formIsValid })
  }

  handleChange(field) {
    let fields = this.state.fields
    fields[field.target.name] = field.target.value
    this.setState({ fields })
    this.handleValidations()
  }

  validateCreditCardNumber(cardNumber) {
    var ccNum = cardNumber.replace(/\./g, '')
    console.log(ccNum)
    var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
    var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/
    var amexpRegEx = /^(?:3[47][0-9]{13})$/
    var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/
    var isValid = false

    if (visaRegEx.test(ccNum)) {
      isValid = true
    } else if (mastercardRegEx.test(ccNum)) {
      isValid = true
    } else if (amexpRegEx.test(ccNum)) {
      isValid = true
    } else if (discovRegEx.test(ccNum)) {
      isValid = true
    }

    if (isValid) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
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
        <ButtonBox />
      </Section>
    )
  }
}

export default Payment
