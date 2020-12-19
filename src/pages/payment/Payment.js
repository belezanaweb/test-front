import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './payment.module.css'

import CardForm from '../../components/card-form/CardForm'
import Total from '../../components/total/Total'
import { useHistory } from 'react-router-dom'

const Payment = () => {
  const [card, setCard] = useState({})

  const dispatch = useDispatch()
  const history = useHistory()

  const sale = useSelector((state) => {
    if (!state.saleState.sale) history.goBack()
    return state.saleState.sale
  })

  const handleCardData = (cardData) => {
    setCard(cardData)
  }

  const handleSubmit = () => {
    console.log(card)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardForm onChange={handleCardData} />
        {sale ? <Total sale={sale} /> : ''}
        <section className={styles.cta}>
          <button className={styles.ctaButton} type="submit">
            Seguir para o pagamento
          </button>
        </section>
      </form>
    </div>
  )
}

export default Payment
