import React, { Component } from 'react'
import InputMask from 'react-input-mask'
import { Form } from '../css/styles'

import DataStorage from '../data/data-storage'

class PaymentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      card_number: '',
      cardholder_name: '',
      expiration_date: '',
      cvv: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(ev) {
    let newState = {}
    newState[ev.target.name] = ev.target.value
    this.setState(newState)

    this.clearErrorClass(ev.target.name)
  }

  handleSubmit(ev) {
    ev.preventDefault()

    let errors_list = this.validateData()

    if (!errors_list.length) {
      let button = document.getElementById('btnFinalizar')

      DataStorage.setPaymentData(
        this.state.card_number,
        this.state.cardholder_name,
        this.state.expiration_date
      )

      if (button != null) button.disabled = false
    } else errors_list.forEach((error) => this.addErrorClass(error.field, error.message))
  }

  render() {
    return (
      <Form id="formPayment" onSubmit={this.handleSubmit}>
        <label>
          <span>Número do cartão:</span>
          <InputMask
            name="card_number"
            placeholder="____.____.____.____"
            mask="9999.9999.9999.9999"
            value={this.props.card_number}
            onChange={this.handleChange}
          />
          <span className="feedback"></span>
        </label>
        <label>
          <span>Nome do Titular:</span>
          <input name="cardholder_name" placeholder="Como no cartão" onChange={this.handleChange} />
          <span className="feedback"></span>
        </label>
        <div className="col">
          <label>
            <span>Validade (mês/ano):</span>
            <InputMask
              name="expiration_date"
              placeholder="__/____"
              mask="99/9999"
              onChange={this.handleChange}
            />
            <span className="feedback"></span>
          </label>
          <label>
            <span>CVV :</span>
            <InputMask name="cvv" placeholder="___" mask="999" onChange={this.handleChange} />
            <span className="feedback"></span>
          </label>
        </div>
        <button id="btnFormPayment" type="submit">
          Submit
        </button>
      </Form>
    )
  }

  validateData() {
    let errors = []

    if (this.state.card_number.replaceAll('_', '').replaceAll('.', '').length < 16) {
      errors.push({ field: 'card_number', message: 'This field is required.' })
    }

    if (this.state.cvv.length < 3) {
      errors.push({ field: 'cvv', message: 'This field is required.' })
    }

    if (!this.state.cardholder_name) {
      errors.push({ field: 'cardholder_name', message: 'This field is required.' })
    }

    if (this.state.expiration_date) {
      let date_splitted = this.state.expiration_date.split('/')
      let month = date_splitted[0]
      let year = date_splitted[1]
      let current_year = new Date().getYear() + 1900
      let current_month = new Date().getMonth() + 1

      if (month < 1 || month > 12) {
        errors.push({ field: 'expiration_date', message: 'Invalid Month.' })
      }

      if (year === current_year && month <= current_month) {
        errors.push({ field: 'expiration_date', message: 'This date has expired.' })
      } else if (year < current_year || year > current_year + 30) {
        errors.push({ field: 'expiration_date', message: 'Invalid Year.' })
      }
    } else {
      errors.push({ field: 'expiration_date', message: 'This field is required.' })
    }

    return errors
  }

  addErrorClass(field, message) {
    let el = document.querySelector("input[name='" + field + "']").parentElement

    el.classList.add('error')
    el.getElementsByClassName('feedback').innerHTML = message
  }

  clearErrorClass(field) {
    let el = document.querySelector("input[name='" + field + "']").parentElement

    el.classList.remove('error')
    el.getElementsByClassName('feedback').innerHTML = ''
  }
}

export default PaymentForm
