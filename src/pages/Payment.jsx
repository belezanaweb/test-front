import React from 'react'

export default class Payment extends React.Component {
  state = {
    subTotal: '',
    shippingTotal: '',
    discount: '',
    total: ''
  }

  componentDidMount() {
    this.fetchPrices()
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
    const { subTotal, shippingTotal, discount, total } = this.state
    return (
      <>
        Cartão de crédito
        <form>
          {/* Box das inputs */}
          <label htmlFor="ccn">
            Número do cartão:
            <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" id="ccn" />
          </label>
          <label htmlFor="name">
            Nome do titular:
            <input id="name" placeholder="Como no cartão" />
          </label>
          <label htmlFor="validity">
            Validade:
            <input id="validity" placeholder="__/____" />
          </label>
          <label htmlFor="cvv">
            CVV:
            <input id="cvv" placeholder="___" />
          </label>
          {/* Box dos preços */}
          <div>
            <p>Produtos: R$ {subTotal}</p>
            <p>Frete: R$ {shippingTotal}</p>
            <p>Desconto: R$ {discount}</p>
            <p>Total: R$ {total}</p>
            <button>Finalizar o pedido</button>
          </div>
        </form>
      </>
    )
  }
}
