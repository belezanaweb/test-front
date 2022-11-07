import React from 'react'
import styles from './Total.module.css'

export default function Total() {
  const products = 'R$ 624,80'
  const freight = 'R$ 5,30'
  const discount = '-R$ 30,00'
  const total = 'R$ 600,10'

  return (
    <section className={styles.total}>
      <div className={styles.product}>
        <p>PRODUTOS</p>
        <p>{products}</p>
      </div>
      <div className={styles.freight}>
        <p>FRETE</p>
        <p>{freight}</p>
      </div>
      <div className={styles.discount}>
        <p>DESCONTO</p>
        <p>{discount}</p>
      </div>
      <div className={styles.subtotal}>
        <p>TOTAL</p>
        <p>{total}</p>
      </div>
    </section>
  )
}
