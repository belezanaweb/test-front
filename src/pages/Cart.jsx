import React from 'react'

export default class Cart extends React.Component {
  state = {
    cartItems: []
  }

  componentDidMount() {
    this.fetchCartItems()
  }

  fetchCartItems = async () => {
    const url = 'http://www.mocky.io/v2/5b15c4923100004a006f3c07'
    const request = await fetch(url)
    const response = await request.json()
    const { items } = response
    this.setState({
      cartItems: items
    })
  }
  render() {
    const { cartItems } = this.state
    return (
      <>
        {cartItems.map(({ product }) => (
          // Box onde os produtos serão alencados
          <div>
            <p>{product.name}</p>
            <p>{product.priceSpecification.price}</p>
            <img src={product.imageObjects[0].medium} alt="products" />
          </div>
        ))}
      </>
    )
  }
}
