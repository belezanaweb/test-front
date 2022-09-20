import React from 'react'

export default class Payment extends React.Component {
  state = {
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

  handleChange = ({ target }) => {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
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
    const { subTotal, shippingTotal, discount, total, ccn, name, validity, cvv } = this.state
    return (
      <>
        Cartão de crédito
        <form>
          {/* Box das inputs */}
          <label htmlFor="ccn">
            Número do cartão:
            <input
              type="text"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              id="ccn"
              maxLength="16"
              name="ccn"
              value={ccn}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="name">
            Nome do titular:
            <input
              id="name"
              placeholder="Como no cartão"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="validity">
            Validade:
            <input
              id="validity"
              placeholder="__/____"
              name="validity"
              value={validity}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="cvv">
            CVV:
            <input id="cvv" placeholder="___" name="cvv" value={cvv} onChange={this.handleChange} />
          </label>
          {/* Box dos preços */}
          <div>
            <p>Produtos: R$ {subTotal}</p>
            <p>Frete: R$ {shippingTotal}</p>
            <p>Desconto: R$ {discount}</p>
            <p>Total: R$ {total}</p>
            <button type="button" onClick={this.handleClick}>
              Finalizar o pedido
            </button>
          </div>
        </form>
      </>
    )
  }
}
