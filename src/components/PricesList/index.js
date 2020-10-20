import React from 'react'

import './PricesList.scss'

import { priceFormat } from '../../utils/priceFormat'

const PricesList = (props) => {

  return (

    <div className="card card--outline prices-list">

      <div className="prices-list__item">
        <span className="prices-list__text">Produtos</span>
        <span className="prices-list__text">{ priceFormat(props.items.subTotal) }</span>
      </div>

      <div className="prices-list__item">
        <span className="prices-list__text">Frete</span>
        <span className="prices-list__text">{ priceFormat(props.items.shippingTotal) }</span>
      </div>

      { props.items.discount > 0 &&
        <div className="prices-list__item">
          <span className="prices-list__text prices-list__text--discount">Desconto</span>
          <span className="prices-list__text prices-list__text--discount">-{ priceFormat(props.items.discount) }</span>
        </div>
      }

      <div className="prices-list__item">
        <span className="prices-list__text prices-list__text--bold">Total</span>
        <span className="prices-list__text prices-list__text--bold">{ priceFormat(props.items.total) }</span>
      </div>

    </div>

  )

}

export default PricesList
