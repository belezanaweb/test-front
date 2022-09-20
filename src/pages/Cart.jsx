import React from 'react'
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
      <>
        <p>Produtos</p>
        {cartItems.map(({ product }) => (
          <div key={product.sku}>
            {/* Box onde os produtos serão alencados */}
            <p>{product.name}</p>
            <img src={product.imageObjects[0].small} alt="products" />
            <p>R$ {product.priceSpecification.price}</p>
            {this.setStorageProducts(
              product.imageObjects[0].thumbnail,
              product.name,
              product.priceSpecification.price
            )}
          </div>
        ))}
        <div>
          {/* Box onde o valor total vai ficar */}
          <p>Produtos: R$ {subTotal}</p>
          <p>Frete: R$ {shippingTotal}</p>
          <p>Desconto: R$ {discount}</p>
          <p>Total: R$ {total}</p>
        </div>
        <Link to="/payment">
          <button>Seguir para o pagamento</button>
        </Link>
      </>
    )
  }
}
