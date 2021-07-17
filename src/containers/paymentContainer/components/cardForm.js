import React, { useEffect, useState } from 'react'
import './cardForm.css'
import { TextField } from './textField'
import { connect } from 'react-redux'
import { cardActions } from '../../../store/actions/card'

const Component = ({ card, dispatch }) => {
  const [cardInfo, setCardInfo] = useState(card)

  useEffect(() => {
    dispatch(cardActions.update(cardInfo))
  }, [cardInfo, dispatch])

  return (
    <form className="cardForm">
      <TextField
        label="Número do cartão:"
        onChange={(e) => setCardInfo({ ...cardInfo, cardNum: e.target.value })}
        value={card.cardNum}
      />
      <TextField
        label="Nome do Titular:"
        onChange={(e) => setCardInfo({ ...cardInfo, cardName: e.target.value })}
        value={card.cardName}
      />
      <div className="formRow">
        <TextField
          label="Validade (mês/ano):"
          onChange={(e) => setCardInfo({ ...cardInfo, cardVal: e.target.value })}
          value={card.cardVal}
        />
        <TextField
          label="CVV:"
          onChange={(e) => setCardInfo({ ...cardInfo, cardCvv: e.target.value })}
          value={card.cardCvv}
        />
      </div>
    </form>
  )
}

const CardForm = connect((state) => ({ card: state.card }))(Component)

export { CardForm }
