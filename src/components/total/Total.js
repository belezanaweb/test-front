import React from 'react'
import style from './total.module.css'
import { formatPrice } from '../../helpers/Formatters'

const Total = ({ sale }) => {
  return (
    <>
      <section className={style.calculations}>
        <ul>
          <li>
            <span className={style.label}>Produtos</span>
            <span className={style.value}>{formatPrice(sale.subTotal)}</span>
          </li>
          <li>
            <span className={style.label}>Frete</span>
            <span className={style.value}>{formatPrice(sale.shippingTotal)}</span>
          </li>
          <li className={style.discount}>
            <span className={style.label}>Desconto</span>
            <span className={style.value}>{formatPrice(-sale.discount)}</span>
          </li>
          <li className={style.total}>
            <span className={style.label}>Total</span>
            <span className={style.value}>
              {formatPrice(sale.subTotal + sale.shippingTotal - sale.discount)}
            </span>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Total
