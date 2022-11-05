import React, { useContext } from 'react'
import Product from '../Components/Product'
import Total from '../Components/Total'
import styles from './Confirmation.module.css'
import Context from '../Context/Context'

export default function Confirmation() {
  const { cart, number, name, date } = useContext(Context)

  if (!cart) {
    return <div>Loading</div>
  }

  return (
    <div>
      <header>
        <ul className={styles.header}>
          <li>SACOLA</li>
          <li>PAGAMENTO</li>
          <li className={styles.cart}>CONFIRMAÇÃO</li>
        </ul>
      </header>
      <main>
        <div>
          <p data-testId="success-msg" className={styles.success}>
            COMPRA EFETUADA COM SUCESSO
          </p>
        </div>
        <div>
          <p className={styles.title}>PAGAMENTO</p>
          <div className={styles.pay}>
            <p className={styles.item}>{number}</p>
            <p className={styles.item}>{name}</p>
            <p className={styles.item}>{date}</p>
          </div>
        </div>
        <div>
          <p className={styles.title}>PRODUTOS</p>
          <div className={styles.produtos}>
            <label>
              {cart.items.map((item) => (
                <div className={styles.produto}>
                  <Product
                    image={item.product.imageObjects[0].thumbnail}
                    name={item.product.name}
                  />
                </div>
              ))}
            </label>
          </div>
        </div>
        <div className={styles.total}>
          <Total />
        </div>
      </main>
    </div>
  )
}
