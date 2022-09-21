import React from 'react'
import success from '../assets/success.png'
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
      <React.Fragment>
        <Header />
        <div className="mt-3 d-flex flex-column align-items-center">
          <img src={success} alt="compra finalizada" className="mt-5" />
        </div>
        <p className="mt-2 fs-3 text-muted fw-bold text-sm-center">Pagamento</p>
        {/* Box onde fica as informações do pagamento */}
        <div className="container d-flex flex-column bg-dark shadow p-3 rounded text-sm-center">
          <p className="fs-3 fw-bold text-light">****.****.****.{ccn.split('.')[3]}</p>
          <p className="fs-3 fw-bold mb-4 text-light">{personName}</p>
          <p className="fs-3 fw-bold mb-4 text-light">{validity}</p>
        </div>
        <p className="mt-3 fs-3 text-muted fw-bold text-sm-center">Produtos</p>
        {/* Box onde ficam os produtos */}
        <div className="container d-flex flex-column flex-sm-row align-items-start bg-light shadow p-3 rounded">
          {products.map(({ image, name }) => (
            <div className="d-flex flex-row-reverse align-items-center border-start mt-3 w-75">
              <p className="fs-6">{name}</p>
              <img src={image} alt={name} className="pb-5" />
            </div>
          ))}
        </div>
        {/* Box onde ficam os valores */}
        <div className="container d-flex flex-column border border-muted mt-4 rounded mb-3">
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
      </React.Fragment>
    )
  }
}
