import React from 'react'
import Header from '../components/Header'
import InputMask from 'react-input-mask'
import { Link } from 'react-router-dom'

export default class Payment extends React.Component {
  state = {
    disabled: true,
    subTotal: '',
    shippingTotal: '',
    discount: '',
    total: '',
    ccn: '',
    name: '',
    validity: '',
    cvv: ''
  }

  componentDidMount() {
    this.fetchPrices()
  }

  verifyConditions = () => {
    const { ccn, name, validity, cvv, disabled } = this.state
    const regExCreditCard = /^\d+(\.\d+)*$/
    const regExValidity = /^\d+(\/\d+)*$/
    const regExCVV = /^\d+$/
    if (
      regExCreditCard.test(ccn) &&
      name.length >= 4 &&
      regExValidity.test(validity) &&
      regExCVV.test(cvv)
    ) {
      return this.setState({
        disabled: false
      })
    }
    if (!disabled) {
      return this.setState({
        disabled: true
      })
    }
  }

  handleChange = ({ target }) => {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState(
      {
        [name]: value
      },
      () => this.verifyConditions()
    )
  }

  handleClick = () => {
    const { ccn, name, validity, cvv } = this.state
    const personInfos = {
      name,
      ccn,
      validity,
      cvv
    }
    localStorage.setItem('Infos', JSON.stringify(personInfos))
  }

  fetchPrices = () => {
    const myObj = JSON.parse(localStorage.getItem('Prices'))
    const { subTotal, shippingTotal, discount, total } = myObj
    this.setState({
      subTotal,
      shippingTotal,
      discount,
      total
    })
  }
  render() {
    const {
      subTotal,
      shippingTotal,
      discount,
      total,
      ccn,
      name,
      validity,
      cvv,
      disabled
    } = this.state
    return (
      <React.Fragment>
        <Header />
        <p className="mt-5 fs-3 text-muted fw-bold text-sm-center">Cartão de crédito</p>
        <form>
          <div className="container d-flex flex-column bg-light shadow p-3 rounded">
            {/* Box das inputs */}
            <label htmlFor="ccn">
              <div className="d-flex flex-column mt-2">
                <span className="fs-6 f-color">Número do cartão:</span>
                <InputMask
                  mask="9999.9999.9999.9999"
                  placeholder="____.____.____.____"
                  id="ccn"
                  name="ccn"
                  value={ccn}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
            </label>
            <label htmlFor="name">
              <div className="d-flex flex-column mt-3">
                <span className="fs-6 f-color">Nome do titular:</span>
                <InputMask
                  maxLength="30"
                  id="name"
                  placeholder="Como no cartão"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
            </label>
            <div className="d-flex mt-3 gap-3">
              <label htmlFor="validity">
                <span className="fs-6 f-color">Validade:</span>
                <InputMask
                  mask="99/9999"
                  id="validity"
                  placeholder="__/____"
                  name="validity"
                  value={validity}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </label>
              <label htmlFor="cvv">
                <span className="fs-6 f-color">CVV:</span>
                <InputMask
                  mask="999"
                  id="cvv"
                  placeholder="___"
                  name="cvv"
                  value={cvv}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </label>
            </div>
          </div>
          {/* Box dos preços */}
          <div className="container d-flex flex-column border border-muted mt-4 rounded">
            {/* Box onde o valor total vai ficar */}
            <div className="d-flex flex-column align-items-between">
              <div className="d-flex justify-content-between">
                <p className="fs-5">Produtos:</p>
                <p className="fs-5">R$ {subTotal}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="fs-5">Frete:</p>
                <p className="fs-5">R$ {shippingTotal}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="fs-5 discount-color">Desconto:</p>
                <p className="fs-5 discount-color"> - R$ {discount}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="fs-5 fw-bold">Total:</p>
                <p className="fs-5 fw-bold">R$ {total}</p>
              </div>
            </div>
          </div>
          <div
            className={`container d-flex justify-content-center mt-2 pt-2 pb-2 rounded shadow mb-2 ${
              disabled ? 'disabled-b' : 'bg-button'
            }`}
          >
            <Link to="/submit" className="text-decoration-none">
              <span
                type="button"
                className={`fs-2 text-light fw-bold ${disabled ? 'link-cursor' : ''}`}
                onClick={this.handleClick}
                disabled={disabled}
              >
                Finalizar o pedido
              </span>
            </Link>
          </div>
        </form>
      </React.Fragment>
    )
  }
}
