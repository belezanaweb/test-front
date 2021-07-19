import React, { useEffect, useState } from 'react'
import './cardForm.css'
import { TextField } from './textField'
import { connect } from 'react-redux'
import { cardActions } from '../../../store/actions/card'
import moment from 'moment'

const validate = (mask, value, isExp = false) => {
  if (mask === 'name-field') {
    return value.length >= 3
  }
  const pattern = '^' + mask.replaceAll('9', '[0-9]') + '$'
  const regex = new RegExp(pattern)
  return isExp ? moment(value, 'MM/YYYY') > moment() && regex.test(value) : regex.test(value)
}

const Component = ({ card, dispatch }) => {
  const [cardInfo, setCardInfo] = useState(card)
  const [isValidCardNum, setIsValidCardNum] = useState(card.isValidCardNum)
  const [isValidCardExp, setIsValidCardExp] = useState(card.isValidCardExp)
  const [isValidCardName, setIsValidCardName] = useState(card.isValidCardName)
  const [isValidCardCvv, setIsValidCardCvv] = useState(card.isValidCardCvv)

  useEffect(() => {
    if (isValidCardNum && isValidCardExp && isValidCardName && isValidCardCvv) {
      dispatch(
        cardActions.update({
          ...cardInfo,
          isValid: true,
          isValidCardNum,
          isValidCardExp,
          isValidCardName,
          isValidCardCvv
        })
      )
    } else {
      dispatch(
        cardActions.update({
          ...cardInfo,
          isValid: false,
          isValidCardNum,
          isValidCardExp,
          isValidCardName,
          isValidCardCvv
        })
      )
    }
  }, [cardInfo, dispatch, isValidCardCvv, isValidCardName, isValidCardNum, isValidCardExp])

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
          isValid={isValidCardExp}
          id="val-text-field"
          label="Validade (mês/ano):"
          mask="99/9999"
          onChange={(e) => {
            setCardInfo({ ...cardInfo, cardExp: e.target.value })
            setIsValidCardExp(
              validate(e.target.parentNode.attributes.mask.value, e.target.value, true)
            )
          }}
          value={card.cardExp}
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
