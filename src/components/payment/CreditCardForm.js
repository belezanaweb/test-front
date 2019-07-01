import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCardData } from '../../actions/paymentActions'

export class CreditCardForm extends Component {
  state = {
    creditCard: '',
    name: '',
    validate: '',
    cvv: ''
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit = e => {
    e.preventDefault()
    const { creditCard, name, validate, cvv } = this.state
    const cardData = {
      creditCard,
      name,
      validate,
      cvv
    }

    this.props.addCardData(cardData)

    this.setState({
      creditCard: '',
      name: '',
      validate: '',
      cvv: ''
    })
    window.location.href = '/request'
  }

  render() {
    const { creditCard, name, validate, cvv } = this.state
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Numero do cartao</label>
            <input
              className="form-control"
              type="number"
              name="creditCard"
              onChange={this.onChange}
              value={creditCard}
            />
          </div>
          <div className="form-group">
            <label>Nome</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Validade</label>
            <input
              className="form-control"
              type="number"
              name="validate"
              onChange={this.onChange}
              value={validate}
            />
            <label>CVV</label>
            <input
              className="form-control"
              type="number"
              name="cvv"
              onChange={this.onChange}
              value={cvv}
            />
          </div>
          {creditCard !== '' ? (
            name !== '' ? (
              validate !== '' ? (
                cvv !== '' ? (
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      FINALIZAR PEDIDO
                    </button>
                  </div>
                ) : (
                  ''
                )
              ) : (
                ''
              )
            ) : (
              ''
            )
          ) : (
            ''
          )}
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { addCardData }
)(CreditCardForm)
