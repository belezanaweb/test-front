import React, { useEffect, useState } from 'react'
import './cardForm.css'
import { TextField } from './textField'
import { connect } from 'react-redux'
import { cardActions } from '../../../store/actions/card'

const validate = (mask, value) => {
  if (mask === 'name-field') {
    return value.length >= 3
  }
  const pattern = '^' + mask.replaceAll('9', '[0-9]') + '$'
  const regex = new RegExp(pattern)
  return regex.test(value)
}

const Component = ({ card, dispatch }) => {
  const [cardInfo, setCardInfo] = useState(card)
  const [isValidCardNum, setIsValidCardNum] = useState(null)
  const [isValidCardVal, setIsValidCardVal] = useState(null)
  const [isValidCardName, setIsValidCardName] = useState(null)
  const [isValidCardCvv, setIsValidCardCvv] = useState(null)

  useEffect(() => {
    if (isValidCardNum && isValidCardVal && isValidCardName && isValidCardCvv) {
      dispatch(cardActions.update({ ...cardInfo, isValid: true }))
    } else {
      dispatch(cardActions.update(cardInfo))
    }
  }, [cardInfo, dispatch, isValidCardCvv, isValidCardName, isValidCardNum, isValidCardVal])

  return (
    <form className="cardForm">
      <TextField
        isValid={isValidCardNum}
        id="card-text-field"
        label="Número do cartão:"
        mask="9999.9999.9999.9999"
        onChange={(e) => {
          setCardInfo({ ...cardInfo, cardNum: e.target.value })
          setIsValidCardNum(validate(e.target.parentNode.attributes.mask.value, e.target.value))
        }}
        value={card.cardNum}
      />
      <TextField
        isValid={isValidCardName}
        id="name-text-field"
        className="name"
        label="Nome do Titular:"
        placeholder="Como no cartão"
        onChange={(e) => {
          setCardInfo({ ...cardInfo, cardName: e.target.value })
          setIsValidCardName(validate('name-field', e.target.value))
        }}
        value={card.cardName}
      />
      <div className="formRow">
        <TextField
          isValid={isValidCardVal}
          id="val-text-field"
          label="Validade (mês/ano):"
          mask="99/9999"
          onChange={(e) => {
            setCardInfo({ ...cardInfo, cardVal: e.target.value })
            setIsValidCardVal(validate(e.target.parentNode.attributes.mask.value, e.target.value))
          }}
          value={card.cardVal}
        />
        <TextField
          isValid={isValidCardCvv}
          id="cvv-text-field"
          label="CVV:"
          mask="999"
          onChange={(e) => {
            setCardInfo({ ...cardInfo, cardCvv: e.target.value })
            setIsValidCardCvv(validate(e.target.parentNode.attributes.mask.value, e.target.value))
          }}
          value={card.cardCvv}
        />
      </div>
    </form>
  )
}

const CardForm = connect((state) => ({ card: state.card }))(Component)

export { CardForm }
