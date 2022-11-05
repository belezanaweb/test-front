import React, { useContext } from 'react'
import Product from '../Components/Product'
import Total from '../Components/Total'
import { useNavigate } from 'react-router-dom'
import styles from './Cart.module.css'
import Context from '../Context/Context'

export default function Cart() {
  const { cart } = useContext(Context)

  const navigate = useNavigate()
  const goToPayment = () => {
    navigate('/payment')
  }
  if (!cart) {
    return <div>Loading</div>
  }

  return (
    <div>
      <header>
        <ul className={styles.header}>
          <li data-testid="cart" className={styles.cart}>
            SACOLA
          </li>
          <li>PAGAMENTO</li>
          <li>CONFIRMAÇÃO</li>
        </ul>
      </header>
      <main>
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
