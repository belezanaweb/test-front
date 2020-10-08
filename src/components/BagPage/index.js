import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function BagPage() {
  const [cart, setCart] = useState('')
  const history = useHistory()
  const baseUrl = 'http://www.mocky.io/v2/5b15c4923100004a006f3c07'

  const total = cart.subTotal + cart.shippingTotal - cart.discount

  useEffect(() => {
    if (!cart) {
      getCart()
    } else {
      localStorage.setItem('infoCart', JSON.stringify(cart))
    }
  }, [cart])

  const getCart = async () => {
    try {
      const result = await axios.get(baseUrl)
      setCart(result.data)
    } catch (error) {
      alert('Erro ocorrido!')
    }
  }

  const goToPayment = () => {
    history.push('/payment')
  }

  const listProductsCart =
    cart &&
    cart.items.map((item) => (
      <div>
        {item.product.imageObjects.map((image) => (
          <img src={image.small} alt="product"></img>
        ))}
        {item.product.name}
        <div>{item.product.priceSpecification.price.toFixed(2)}</div>
      </div>
    ))

  return (
    <div>
      <div>Sacola</div>
      <div>{listProductsCart}</div>
      <hr></hr>
      <div>
        {cart && (
          <div>
            <p>Produtos: {cart.subTotal.toFixed(2)}</p>
            <p>Frete: {cart.shippingTotal.toFixed(2)}</p>
            <p>Desconto: {cart.discount.toFixed(2)}</p>
            <p>Total: {total.toFixed(2)}</p>
          </div>
        )}
      </div>
      <button onClick={goToPayment}>SEGUIR PARA O PAGAMENTO</button>
    </div>
  )
}

export default BagPage
