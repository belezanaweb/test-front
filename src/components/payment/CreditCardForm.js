import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCardData } from '../../actions/paymentActions'
import BagResume from '../bag/BagResume'

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

  checkDados = () => {
    const { creditCard, name, validate, cvv } = this.state
    if (creditCard === '' || name === '' || validate === '' || cvv === '') return true
    return false
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
  }

  render() {
    const { creditCard, name, validate, cvv } = this.state

    const labelStyle = {
      fontSize: '12px',
      color: 'gray'
    }

    const formStyle = {
      backgroundColor: 'white',
      padding: '10px'
    }

    const btnStyle = {
      backgroundColor: 'orange',
      width: '100%',
      color: 'white'
    }
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div style={formStyle}>
            <div className="form-group">
              <label style={labelStyle}>Numero do cartao</label>
              <input
                className="form-control"
                type="number"
                name="creditCard"
                placeholder="____.____.____.____"
                onChange={this.onChange}
                value={creditCard}
              />
            </div>
            <div className="form-group">
              <label style={labelStyle}>Nome</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Como no Cartão"
                onChange={this.onChange}
                value={name}
              />
            </div>
            <div className="input-group">
              <label style={labelStyle}>Validade</label>
              <input
                className="form-control"
                type="number"
                name="validate"
                placeholder="__/____"
                onChange={this.onChange}
                value={validate}
              />
              <label style={labelStyle}>CVV</label>
              <input
                className="form-control"
                type="number"
                name="cvv"
                placeholder="___"
                onChange={this.onChange}
                value={cvv}
              />
            </div>
          </div>
          <br />
          <BagResume />
          <br />
          <div className="form-group">
            <button type="submit" disabled={this.checkDados()} style={btnStyle} className="btn">
              FINALIZAR PEDIDO
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { addCardData }
)(CreditCardForm)
