import React, { Component } from 'react'

// import { Container } from './styles';

export default class Form extends Component {
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
      errors['name'] = 'Name cannot be empty'
      //console.log('invalid name')
    }

    if (fields['email'] === '' && fields['email'] != null) {
      formIsValid = false
      errors['email'] = 'Email cannot be empty'
      //console.log('invalid email')
    }

    if (fields['cardnumber'] != null) {
      if (this.validateCreditCardNumber(fields['cardnumber'])) {
        console.log('valid cardnumber')
      } else {
        console.log('invalid cardnumber')
        formIsValid = false
        errors['cardnumber'] = 'CardNumber is invalid'
      }
    }

    if (fields['cardname'] === '' && fields['cardname'] != null) {
      formIsValid = false
      errors['cardname'] = 'Cardname cannot be empty'
      //console.log('invalid cardname')
    }

    if (fields['cardcvv'] === '' && fields['cardcvv'] != null) {
      formIsValid = false
      errors['cardcvv'] = 'CVV cannot be empty'
      //console.log('invalid cardcvv')
    }

    if (fields['cardvalidate'] != null) {
      var cardvalidate = /^[0-1][0-9]\/\d{4}$/
      if (cardvalidate.test(fields['cardvalidate'])) {
        console.log('valid cardcvv')
      } else {
        console.log('invalid cardcvv')
        errors['cardvalidate'] = 'Cardvalidate cannot be empty'
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
    var ccNum = cardNumber
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

  submitForm() {}

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Nome</label>
            <input
              name="name"
              placeholder="Nome"
              ref="name"
              type="text"
              onChange={e => this.handleChange(e)}
            />
            <span>{this.state.errors['name']}</span>
          </div>

          <div>
            <label>E-mail</label>
            <input
              name="email"
              placeholder="E-mail"
              ref="email"
              type="text"
              onChange={e => this.handleChange(e)}
            />
            <span>{this.state.errors['email']}</span>
          </div>

          <div>
            <label>Card Number</label>
            <input
              name="cardnumber"
              placeholder="CardNumber"
              ref="cardnumber"
              type="text"
              onChange={e => this.handleChange(e)}
            />
            <span>{this.state.errors['cardnumber']}</span>
          </div>

          <div>
            <label>Nome do titular do cartão</label>
            <input
              name="cardname"
              placeholder="Como no cartão"
              ref="cardname"
              type="text"
              onChange={e => this.handleChange(e)}
            />
            <span>{this.state.errors['cardname']}</span>
          </div>

          <div>
            <label>CVV</label>
            <input
              name="cardcvv"
              placeholder="CVV"
              ref="cardcvv"
              type="text"
              onChange={e => this.handleChange(e)}
            />
            <span>{this.state.errors['cardcvv']}</span>
          </div>

          <div>
            <label>CVV</label>
            <input
              name="cardvalidate"
              placeholder="__/____"
              ref="cardvalidate"
              type="text"
              onChange={e => this.handleChange(e)}
            />
            <span>{this.state.errors['cardvalidate']}</span>
          </div>

          <div>
            <label>Senha</label>
            <input name="email" placeholder="Senha" />
          </div>

          <div>
            <button
              onClick={() => {
                this.submitForm()
              }}
            />
          </div>
        </form>
      </div>
    )
  }
}
