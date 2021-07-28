import React from 'react'
import { render } from 'react-dom'
import 'react-credit-cards/es/styles-compiled.css'
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from '../../utils/Cart/utils'
import { FormContainer, FormSmall, FormInput, FormInput2 } from './styles'

export default class Input extends React.Component {
  state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focused: '',
    formData: null
  }

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer })
    }
  }

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    })
  }

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value)
    }

    this.setState({ [target.name]: target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value
        return acc
      }, {})

    this.setState({ formData })
    this.form.reset()
  }

  render() {
    const { formData } = this.state

    return (
      <div key="Payment">
        <form ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
          <FormContainer>
            <label>Número do cartão</label>
            <input
              type="tel"
              name="number"
              className="form-control"
              placeholder=""
              pattern="[\d| ]{16,22}"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </FormContainer>
          <FormContainer>
            <label>Nome do Titular</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder=""
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </FormContainer>
          <FormSmall>
            <FormInput>
              <label>Validate (mês/ano)</label>
              <input
                type="tel"
                name="expiry"
                className="form-control"
                placeholder=""
                pattern="\d\d/\d\d"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </FormInput>
            <FormInput2>
              <label>CVV</label>
              <input
                type="tel"
                name="cvc"
                className="form-control"
                placeholder=" "
                pattern="\d{3}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </FormInput2>
          </FormSmall>
        </form>
        {formData && (
          <div className="App-highlight">
            {formatFormData(formData).map((d, i) => (
              <div key={i}>{d}</div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

render(<Input />, document.getElementById('root'))
