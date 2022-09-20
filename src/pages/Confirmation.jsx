import React from 'react'

export default class Confirmation extends React.Component {
  state = {
    subTotal: '',
    shippingTotal: '',
    discount: '',
    total: '',
    products: []
  }

  componentDidMount() {
    this.fetchStorage()
  }

  fetchStorage = () => {
    const prices = JSON.parse(localStorage.getItem('Prices'))
    const products = JSON.parse(localStorage.getItem('Products'))
    const { subTotal, shippingTotal, discount, total } = prices
    this.setState({
      subTotal,
      shippingTotal,
      discount,
      total,
      products
    })
  }
  render() {
    const { products, subTotal, shippingTotal, discount, total } = this.state
    return (
      <>
        Pagamento
        {/* Box onde fica as informações do pagamento */}
        <div>Cartão Nome Data de validade</div>
        Produtos
        {/* Box onde ficam os produtos */}
        <div>
          {products.map(({ image, name }) => (
            <div>
              <img src={image} alt={name} />
              <p>{name}</p>
            </div>
          ))}
        </div>
        {/* Box onde ficam os valores */}
        <div>
          <p>Produtos: R$ {subTotal}</p>
          <p>Frete: R$ {shippingTotal}</p>
          <p>Desconto: R$ {discount}</p>
          <p>Total: R$ {total}</p>
        </div>
      </>
    )
  }
}
