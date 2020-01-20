import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usePaymentInputs } from 'react-payment-inputs'
import images from 'react-payment-inputs/images'

import { Input, Container } from './styles'

import * as actions from '~/store/ducks/checkout/actions'

export default function PaymentInputs() {
  const activeButton = useSelector(state => state.checkout.data)

  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setexpiryDate] = useState('')
  const [cvc, setcvc] = useState('')
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps
  } = usePaymentInputs()

  const dispatch = useDispatch()

  function handleChangeCardNumber(e) {
    dispatch(
      actions.activeButtonRequest({
        ...activeButton,
        cardNumber: false
      })
    )
    localStorage.setItem('cardNumber', e.target.value.split(' ').pop())
    document.getElementById('cardNumber').maxLength = '24'
    setCardNumber(e.target.value)
  }

  function handleChangeName(e) {
    dispatch(
      actions.activeButtonRequest({
        ...activeButton,
        holdername: false
      })
    )
    localStorage.setItem('nameCard', e.target.value)
  }

  function handleChangeExpiryDate(e) {
    dispatch(
      actions.activeButtonRequest({
        ...activeButton,
        expiryDate: false
      })
    )
    localStorage.setItem('expiryDate', e.target.value)
    setexpiryDate(e.target.value)
  }

  function handleChangeCVC(e) {
    dispatch(
      actions.activeButtonRequest({
        ...activeButton,
        cvc: false
      })
    )
    document.getElementById('cvc').maxLength = '3'
    setcvc(e.target.value)
  }

  // console.log('Form', activeButton)

  return (
    <Container id={`buttonIsActive${meta.isTouched && !!meta.error}`}>
      <svg {...getCardImageProps({ images })} className="cardIcons" />
      <label className="labelCard" htmlFor="numero-do-cartao">
        Número do cartão:
      </label>
      <Input
        id="numero-do-cartao"
        className={`${
          (meta.isTouched && meta.error === 'Card number is invalid') ||
          (meta.isTouched && meta.error === 'Enter a card number') ||
          activeButton.cardNumber
            ? 'invalidField'
            : ''
        } `}
        {...getCardNumberProps({ onChange: handleChangeCardNumber })}
        value={cardNumber}
        placeholder="____,____,____,____"
      />
      <span>{`${
        (meta.isTouched && meta.error === 'Card number is invalid') ||
        (meta.isTouched && meta.error === 'Enter a card number') ||
        activeButton.cardNumber
          ? 'Número do cartão de credito inválido'
          : ''
      }`}</span>
      <label htmlFor="">Nome do Titular:</label>
      <Input
        type="text"
        className={`${activeButton.holdername ? 'invalidField' : ''}`}
        onChange={e => handleChangeName(e)}
        id="holdername"
        placeholder="Como no cartão"
      />
      <span>{`${activeButton.holdername ? 'Nome inválido' : ''}`}</span>
      <div className="validityAndPassword">
        <div className="validity">
          <label htmlFor="">Validade (mês/ano):</label>
          <Input
            className={`${
              (meta.isTouched && meta.error === 'Expiry date is invalid') ||
              meta.error === 'Expiry year cannot be in the past' ||
              (meta.isTouched && meta.error === 'Enter an expiry date') ||
              (meta.isTouched && meta.error === 'Expiry month must be between 01 and 12') ||
              activeButton.expiryDate
                ? 'invalidField'
                : ''
            }`}
            {...getExpiryDateProps({ onChange: handleChangeExpiryDate })}
            value={expiryDate}
            placeholder="__/____"
          />
          <span>{`${
            (meta.isTouched && meta.error === 'Expiry date is invalid') ||
            meta.error === 'Expiry year cannot be in the past' ||
            (meta.isTouched && meta.error === 'Enter an expiry date') ||
            activeButton.expiryDate
              ? 'Data inválido'
              : ''
          }`}</span>
        </div>
        <div className="password">
          <label htmlFor="">CVV:</label>
          <Input
            className={`${
              (meta.isTouched && meta.error === 'CVC is invalid') ||
              (meta.isTouched && meta.error === 'Enter a CVC') ||
              activeButton.cvc
                ? 'invalidField'
                : ''
            }`}
            {...getCVCProps({ onChange: handleChangeCVC })}
            value={cvc}
            placeholder="___"
            maxlength="3"
            required
          />
          <span>{`${
            (meta.isTouched && meta.error === 'CVC is invalid') ||
            (meta.isTouched && meta.error === 'Enter a CVC') ||
            activeButton.cvc
              ? 'CVV inválido'
              : ''
          }`}</span>
        </div>
      </div>
      {/* {console.log(meta.isTouched && !!meta.error)} */}
    </Container>
  )
}
