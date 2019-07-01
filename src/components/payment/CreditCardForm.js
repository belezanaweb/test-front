import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CreditCardForm extends Component {
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
                  <Link to="/request">FINALIZAR PEDIDO</Link>
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
