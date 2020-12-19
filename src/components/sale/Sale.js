import React from 'react'
import style from './sale.module.css'
import Formatters from '../../util/Formatters'

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
                  {Formatters.formatPrice(item.product.priceSpecification.price)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={style.calculations}>
        <ul>
          <li>
            <span className={style.label}>Produtos</span>
            <span className={style.value}>{Formatters.formatPrice(sale.subTotal)}</span>
          </li>
          <li>
            <span className={style.label}>Frete</span>
            <span className={style.value}>{Formatters.formatPrice(sale.shippingTotal)}</span>
          </li>
          <li className={style.discount}>
            <span className={style.label}>Desconto</span>
            <span className={style.value}>{Formatters.formatPrice(-sale.discount)}</span>
          </li>
          <li className={style.total}>
            <span className={style.label}>Total</span>
            <span className={style.value}>
              {Formatters.formatPrice(sale.subTotal + sale.shippingTotal - sale.discount)}
            </span>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Sale
