import React from 'react'
import style from './sale.module.css'
import { formatPrice } from '../../helpers/Formatters'

const Sale = ({ sale }) => {
  return (
    <>
      <section className={style.items}>
        <header>
          <h2>Produtos</h2>
        </header>
        <div className={style.card}>
          {sale.items.map((item, index) => (
            <article className={style.item} key={index}>
              <div className={style.thumbnail}>
                <img src={item.product.imageObjects[0].thumbnail} alt={item.product.name} />
              </div>
              <div className={style.content}>
                <p className={style.description}>{item.product.name}</p>
                <p className={style.value}>
                  {formatPrice(item.product.priceSpecification.price)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Sale
