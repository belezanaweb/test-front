import React from 'react'
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
      <>
        Cartão de crédito
        <form>
          {/* Box das inputs */}
          <label htmlFor="ccn">
            Número do cartão:
            <InputMask
              mask="9999.9999.9999.9999"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              id="ccn"
              name="ccn"
              value={ccn}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="name">
            Nome do titular:
            <InputMask
              maxLength="30"
              id="name"
              placeholder="Como no cartão"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="validity">
            Validade:
            <InputMask
              mask="99/9999"
              id="validity"
              placeholder="__/____"
              name="validity"
              value={validity}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="cvv">
            CVV:
            <InputMask
              mask="999"
              id="cvv"
              placeholder="___"
              name="cvv"
              value={cvv}
              onChange={this.handleChange}
            />
          </label>
          {/* Box dos preços */}
          <div>
            <p>Produtos: R$ {subTotal}</p>
            <p>Frete: R$ {shippingTotal}</p>
            <p>Desconto: R$ {discount}</p>
            <p>Total: R$ {total}</p>
            <Link to="/submit">
              <button type="button" onClick={this.handleClick} disabled={disabled}>
                Finalizar o pedido
              </button>
            </Link>
          </div>
        </form>
      </>
    )
  }
}
