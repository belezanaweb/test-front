import React, { useState, useEffect } from 'react'
import Product from '../Components/Product'
import Total from '../Components/Total'
import styles from './Confirmation.module.css'

export default function Confirmation() {
  const [product, setProduct] = useState(null)

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
        <div>COMPRA EFETUADA COM SUCESSO</div>
        <div>
          PAGAMENTO
          <p>dados do pagamento</p>
        </div>
        <div>
          PRODUTOS {<Product />}
          {product.items.map((item) => (
            <Product name={item.product.name} image={item.product.imageObjects[0].thumbnail} />
          ))}
        </div>
        <section>
          <Total />
        </section>
      </main>
    </div>
  )
}
