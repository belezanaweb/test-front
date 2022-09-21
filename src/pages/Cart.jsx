import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { castToBRL } from '../services/Utilities'

export default class Cart extends React.Component {
  state = {
    cartItems: [],
    totalPrice: ''
  }

  componentDidMount() {
    this.fetchCartItems()
  }

  setStoragePrices = () => {
    const { subTotal, shippingTotal, discount, total } = this.state
    const localStoragePrices = {
      subTotal,
      shippingTotal,
      discount,
      total
    }
    localStorage.setItem('Prices', JSON.stringify(localStoragePrices))
  }

  setStorageProducts = (image, name, price) => {
    const myProducts = {
      name,
      image,
      price
    }
    const localStoragePr = JSON.parse(localStorage.getItem('Products'))
    const localStorageProducts = [myProducts]
    if (localStoragePr && localStoragePr.some(({ name }) => name === myProducts.name)) {
      return null
    }

    let newProducts = JSON.stringify(localStorageProducts)

    if (localStoragePr && localStoragePr.length > 0) {
      newProducts = [...localStorageProducts, ...localStoragePr]
      newProducts = JSON.stringify(newProducts)
    }
    return localStorage.setItem('Products', newProducts)
  }

  castPrice = (arr) => {
    let item = arr.map((e) => {
      e.product.priceSpecification.price = castToBRL({
        price: e.product.priceSpecification.price
      }).price
      return e
    })
    return item
  }

  fetchCartItems = async () => {
    const url = 'http://www.mocky.io/v2/5b15c4923100004a006f3c07'
    const request = await fetch(url)
    const response = await request.json()
    let { items, subTotal, shippingTotal, discount, total } = response
    items = this.castPrice(items)
    const newObj = castToBRL({
      subTotal,
      shippingTotal,
      discount,
      total
    })

    this.setState({
      cartItems: items,
      ...newObj
    })
    this.setStoragePrices()
  }
  render() {
    const { cartItems, subTotal, shippingTotal, discount, total } = this.state
    return (
      <React.Fragment>
        <Header />
        <p className="mt-5 fs-3 text-muted fw-bold text-sm-center">Produtos</p>
        <div className="container d-flex flex-column flex-sm-row align-items-start bg-light shadow p-3 rounded">
          {cartItems.map(({ product }) => (
            <div key={product.sku} className="w-75">
              {/* Box onde os produtos serão alencados */}
              <div className="d-flex flex-row-reverse border-start align-items-center">
                <p className="fs-6">{product.name}</p>
                <img src={product.imageObjects[0].small} alt="products" className="pb-5" />
              </div>
              <div className="d-flex justify-content-end justify-content-sm-center">
                <p className="fw-bold">R$ {product.priceSpecification.price}</p>
              </div>
              {this.setStorageProducts(
                product.imageObjects[0].small,
                product.name,
                product.priceSpecification.price
              )}
            </div>
          ))}
        </div>
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
        <div className="container d-flex justify-content-center mt-2 bg-button pt-2 pb-2 rounded shadow mb-2">
          <Link to="/payment" className="text-decoration-none">
            <span className="fs-2 text-light fw-bold">Seguir para o pagamento</span>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}
