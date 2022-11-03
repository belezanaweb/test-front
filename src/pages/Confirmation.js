import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import Product from '../Components/Product'
import Total from '../Components/Total'
import styles from './Confirmation.module.css'
import Context from '../Context/Context'

export default function Confirmation() {
  const [product, setProduct] = useState(null)
  const { cardNumber } = useContext(Context)

  console.log(cardNumber)

  useEffect(() => {
    const product = async () => {
      const url = await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      const data = await url.json()
      setProduct(data)
    }
    product()
  }, [])

  if (!product) {
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
          <p>dados do pagamento</p>
        </div>
        <div>
          <p className={styles.title}>PRODUTOS</p>
          <div className={styles.produtos}>
            <label>
              {product.items.map((item) => (
                <div className={styles.produto}>
                  <Product
                    name={item.product.name}
                    image={item.product.imageObjects[0].thumbnail}
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
