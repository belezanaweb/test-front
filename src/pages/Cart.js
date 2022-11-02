import React, { useEffect, useState } from 'react'
import Product from '../Components/Product'
import Header from '../Components/Header'
import Total from '../Components/Total'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const [cart, setCart] = useState(null)

  useEffect(() => {
    const cart = async () => {
      const url = await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      const data = await url.json()
      // console.log(data)
      setCart(data)
    }
    cart()
  }, [])

  const navigate = useNavigate()
  const goToPayment = () => {
    navigate('/payment')
  }
  // console.log(cart);
  if (!cart) {
    return <div>Loading</div>
  }

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div>
          PRODUTOS
          {cart.items.map((item) => (
            <Product
              name={item.product.name}
              image={item.product.imageObjects[0].thumbnail}
              price={`R$ ${item.product.priceSpecification.price}`}
            />
          ))}
        </div>
        {/* <p>{dados1}</p> */}
        <Total />
        <button onClick={goToPayment}>SEGUIR PARA O PAGAMENTO</button>
      </main>
    </div>
  )
}
