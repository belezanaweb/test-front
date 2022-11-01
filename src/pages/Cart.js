import React, { useEffect, useState } from 'react'
// import MyContext from '../Context/MyContext'
import Product from '../Components/Product'

function Cart() {
  const [cart, setCart] = useState(null)

  useEffect(() => {
    const cart = async () => {
      const url = await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      const data = await url.json()
      console.log(data)
      setCart(data)
    }
    cart()
  }, [])

  // console.log(cart.items[0].product.name);

  if (!cart) {
    return <div>Loading</div>
  }

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>Sacola</li>
            <li>Pagamento</li>
            <li>Confirmação</li>
          </ul>
        </nav>
      </header>
      <main>
        {cart.items.map((item) => (
          <Product name={item.product.name} image={item.product.imageObjects[0].thumbnail} />
        ))}
      </main>
      {/* <ul>
        { aqui.map((dado) => <li key={ dado.id }>{dado}</li>)}
      </ul> */}
    </div>
  )
}

export default Cart
