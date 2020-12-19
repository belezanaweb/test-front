import React, { useState } from 'react'
import style from './card-form.module.css'

const CardForm = ({ onCahnge }) => {
  const [card, setCard] = useState({
    number: '',
    name: '',
    expiration: '',
    cvv: ''
  })

  const handleChange = (event) => {
    setCard({ [event.target.name]: event.target.value })
    onCahnge(card)
  }

  return (
    <>
      <section className={style.cardForm}>
        <header>
          <h2>Produtos</h2>
        </header>
        <div className={style.card}>
          <div className={style.field}>
            <label htmlFor="input-number">Número do cartão:</label>
            <input
              type="text"
              id="input-number"
              name="number"
              value={card.number}
              onChange={handleChange}
            />
          </div>

          <div className={style.field}>
            <label htmlFor="input-number">Nome do Titular:</label>
            <input
              type="text"
              id="input-number"
              name="name"
              value={card.name}
              onChange={handleChange}
            />
          </div>

          <div className={(style.field, style.expiration)}>
            <label htmlFor="input-number">
              Validade <small>(mês/ano)</small>:
            </label>
            <input
              type="text"
              id="input-number"
              name="expiration"
              value={card.expiration}
              onChange={handleChange}
            />
          </div>

          <div className={(style.field, style.cvv)}>
            <label htmlFor="input-number">CVV:</label>
            <input
              type="text"
              id="input-number"
              name="cvv"
              value={card.cvv}
              onChange={handleChange}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default CardForm
