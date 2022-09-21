import React from 'react'
import Header from '../components/Header'
import { getStorageItems } from '../services/Utilities'

export default class Confirmation extends React.Component {
  state = {
    subTotal: '',
    shippingTotal: '',
    discount: '',
    total: '',
    personName: '',
    validity: '',
    ccn: '',
    products: []
  }

  componentDidMount() {
    this.fetchStorage()
  }

  fetchStorage = () => {
    const [infos, prices, products] = getStorageItems(['Infos', 'Prices', 'Products'])
    let { subTotal, shippingTotal, discount, total } = prices
    const { validity, name, ccn } = infos
    this.setState({
      subTotal,
      shippingTotal,
      discount,
      total,
      products,
      validity,
      personName: name,
      ccn
    })
  }
  render() {
    const {
      products,
      subTotal,
      shippingTotal,
      discount,
      total,
      validity,
      personName,
      ccn
    } = this.state
    return (
      <>
        <Header />
        Pagamento
        {/* Box onde fica as informações do pagamento */}
        <div>
          <p>{ccn}</p>
          <p>{personName}</p>
          <p>{validity}</p>
        </div>
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
