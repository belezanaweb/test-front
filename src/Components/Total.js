import React from 'react'
import styles from './Total.module.css'

export default function Total() {
  const price = 'R$ 624,80'
  const frete = 'R$ 5,30'
  const desconto = '-R$ 30,00'
  const total = 'R$ 600,10'

  return (
    <section className={styles.total}>
      <div className={styles.product}>
        <p>PRODUTOS</p>
        <p>{price}</p>
      </div>
      <div className={styles.product}>
        <p>FRETE</p>
        <p>{frete}</p>
      </div>
      <div className={styles.product}>
        <p>DESCONTO</p>
        <p>{desconto}</p>
      </div>
      <div className={styles.product}>
        <p>TOTAL</p>
        <p>{total}</p>
      </div>
    </section>
  )
}
