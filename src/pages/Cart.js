import React, { useEffect, useState } from 'react'
import Product from '../Components/Product'
import Total from '../Components/Total'
import { useNavigate } from 'react-router-dom'
import styles from './Cart.module.css'

export default function Cart() {
  const [cart, setCart] = useState(null)

  useEffect(() => {
    const cart = async () => {
      const url = await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      const data = await url.json()
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
        <ul className={styles.header}>
          <li className={styles.cart}>SACOLA</li>
          <li>PAGAMENTO</li>
          <li>CONFIRMAÇÃO</li>
        </ul>
      </header>
      <main className={styles.main}>
        <p className={styles.title}>PRODUTOS</p>
        <div className={styles.produtos}>
          <label>
            {cart.items.map((item) => (
              <div className={styles.produto}>
                <Product
                  name={item.product.name}
                  image={item.product.imageObjects[0].thumbnail}
                  price={`R$ ${item.product.priceSpecification.price.toFixed(2)}`}
                />
              </div>
            ))}
          </label>
        </div>
        <div className={styles.total}>
          <Total />
        </div>
        <div>
          <button className={styles.button} onClick={goToPayment}>
            SEGUIR PARA O PAGAMENTO
          </button>
        </div>
        <footer className={styles.footer}></footer>
      </main>
    </div>
  )
}
