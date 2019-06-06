import React, { Component } from 'react'
import { connect } from 'react-redux'
import { alterCardName, alterCardNumber, alterCardValidate, alterCardCvv } from '../actions'
import { Link } from 'react-router-dom'
import MaskInput from 'react-maskinput'

class Payment extends Component {
  constructor(props) {
    super(props)
  }

  formatCurrency(num) {
    if (num) {
      var num = num.toFixed(2).split('.')
      num[0] = 'R$ ' + num[0].split(/(?=(?:...)*$)/).join('.')
      return num[0] + ',' + num[1]
    }
  }

  render() {
    return (
      <main>
        <div className="container">
          <nav className="nav-products">
            <Link to="/" className="col-xs-4">
              Sacola
            </Link>
            <Link to="/payment" className="active col-xs-4">
              Pagamento
            </Link>
            <a className="col-xs-4">Confirmação</a>
            <div style={{ clear: 'both' }} />
          </nav>

          <div>
            <h1 className="page-heading">Cartão de Crédito</h1>
          </div>

          <div className="form-payment">
            <div className="form-group">
              <label htmlFor="card-number">Número do Cartão:</label>
              <MaskInput
                className="form-control"
                value={this.props.card.number}
                maskChar="_"
                onChange={event => this.props.alterCardNumber(event.target.value)}
                placeholder="____.____.____.____"
                id="card-number"
                mask="0000-0000-0000-0000"
              />
            </div>

            <div className="form-group">
              <label htmlFor="card-name">Nome do Titular:</label>
              <input
                type="text"
                className="form-control"
                value={this.props.card.name}
                onChange={event => this.props.alterCardName(event.target.value)}
                id="card-name"
                placeholder="Como no cartão"
              />
            </div>

            <div className="form-group">
              <label htmlFor="card-validate">Validade (mês/ano):</label>
              <MaskInput
                className="form-control"
                value={this.props.card.validate}
                maskChar="_"
                onChange={event => this.props.alterCardValidate(event.target.value)}
                placeholder="___"
                id="card-validate"
                placeholder="__/____"
                mask="00/0000"
              />
            </div>

            <div className="form-group">
              <label htmlFor="card-cvv">Cvv</label>
              <MaskInput
                className="form-control"
                value={this.props.card.cvv}
                maskChar="_"
                onChange={event => this.props.alterCardCvv(event.target.value)}
                placeholder="___"
                id="card-cvv"
                placeholder="___"
                mask="000"
              />
            </div>

            <div style={{ clear: 'both' }} />
          </div>

          <div className="resume">
            <div className="resume-specification">
              <label>Produtos</label>
              <div className="currency">{this.formatCurrency(this.props.subTotal)}</div>
            </div>
            <div className="resume-specification">
              <label>Frete</label>
              <div className="currency">{this.formatCurrency(this.props.shippingTotal)}</div>
            </div>
            <div className="resume-specification product-discount">
              <label>Desconto</label>
              <div className="currency">{this.formatCurrency(this.props.discount)}</div>
            </div>
            <div className="resume-specification product-total">
              <label>Total</label>
              <div className="currency">{this.formatCurrency(this.props.total)}</div>
            </div>
            <div style={{ clear: 'both' }} />
          </div>

          <div className="button">{this.renderBtn()}</div>
        </div>
      </main>
    )
  }

  validateForm() {
    let valid = true

    if (this.props.card.number.length < 19) {
      valid = false
    }

    return valid
  }

  renderBtn() {
    if (!this.validateForm()) {
      return <div className="btn-finish-disabled">Finalizar o pedido</div>
    } else {
      return (
        <Link to="/confirmation" className="btn-finish">
          Finalizar o pedido
        </Link>
      )
    }
  }
}

// Decorate the component with reducer attributes
const mapStateToProps = state => {
  const discount = state.CartReducer.discount
  const id = state.CartReducer.id
  const items = state.CartReducer.items
  const shippingTotal = state.CartReducer.shippingTotal
  const subTotal = state.CartReducer.subTotal
  const total = state.CartReducer.total
  const loading_cart = state.CartReducer.loading_cart

  const card = state.PaymentReducer.card
  return {
    discount,
    id,
    items,
    subTotal,
    shippingTotal,
    total,
    loading_cart,
    card
  }
}

export default connect(
  mapStateToProps,
  {
    alterCardName,
    alterCardNumber,
    alterCardValidate,
    alterCardCvv
  }
)(Payment)
