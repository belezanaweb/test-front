import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './cart.module.css'

const Cart = () => {
  const [sale, setSale] = useState(null)

  useEffect(() => {
    axios('http://www.mocky.io/v2/5b15c4923100004a006f3c07').then((saleData) => {
      setSale(saleData.data)
    })
  }, [])

  const formatPrice = (value) => {
    if (isNaN(value)) return value

    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }

  if (sale) {
    return (
      <div>
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
              <span className={style.value}>{formatPrice(sale.subTotal + sale.shippingTotal - sale.discount)}</span>
            </li>
          </ul>
        </section>
        <section className={style.cta}>
          <button className={style.ctaButton}>Seguir para o pagamento</button>
        </section>
      </div>
    )
  } else {
    return <h3>Carregando...</h3>
  }
}

export default Cart
