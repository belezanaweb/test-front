import React from 'react'
import styles from './sale.module.css'
import classNames from 'classnames/bind'

import { formatPrice } from '../../helpers/Formatters'

const cx = classNames.bind(styles)

const Sale = ({ sale, showPrice }) => {
  if (showPrice == null) showPrice = true
  return (
    <>
      <section className={styles.items}>
        <header>
          <h2>Produtos</h2>
        </header>
        <div className={styles.card}>
          {sale.items.map((item, index) => (
            <article className={styles.item} key={index}>
              <div className={styles.thumbnail}>
                <img src={item.product.imageObjects[0].thumbnail} alt={item.product.name} />
              </div>
              <div className={cx('content', { noPrice: !showPrice })}>
                <p className={styles.description}>{item.product.name}</p>
                {showPrice && (
                  <p className={styles.value}>
                    {formatPrice(item.product.priceSpecification.price)}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Sale
