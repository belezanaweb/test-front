import React, { useEffect, useState, useCallback } from 'react'
import { useCheckoutContext } from '../../contexts/Checkout'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import Inputs from '../../components/Inputs'
import ProductList from '../../components/ProductList'

const PaymentPage = () => {
  const [data, setData] = useState({
    cardNumber: {
      value: '',
      valid: true
    },
    cardName: {
      value: '',
      valid: true
    },
    cardDate: {
      value: '',
      valid: true
    },
    cardCvv: {
      value: '',
      valid: true
    }
  })

  const {
    isLoading,
    prices,
    isConfirmed,
    setIsConfirmed,
    setPaymentInfo,
    paymentInfo
  } = useCheckoutContext()

  /* dados do cartão de crédito */

  const creditCardData = {
    containerCreditTitle: 'Cartão de crédito',
    buttonText: 'Finalizar o pedido',
    cardNumber: {
      placeholder: '____.____.____.____',
      mask: '9999.9999.9999.9999',
      label: 'Número do cartão:'
    },
    cardCvv: {
      placeholder: '___',
      mask: '999',
      label: 'CVV:'
    },
    cardName: {
      placeholder: 'Como no cartão',
      label: 'Nome do Titular:'
    },
    cardDate: {
      placeholder: '__/____',
      mask: '99/9999',
      label: 'Validade (mês/ano):'
    }
  }

  const { cardNumber, cardName, cardDate, cardCvv } = creditCardData

  /* validação do cartão de crédito */

  const switchValidation = useCallback((type, value, bol) => {
    setData((data) => ({
      ...data,
      [type]: {
        value: value,
        valid: bol
      }
    }))
  }, [])

  const handleChange = useCallback(
    (type, value) => {
      const targetValue = value.target.value
      const newValue = targetValue.replaceAll('.', '')

      const valid = require('card-validator')
      const valCardNumber = (number) => {
        const numberValidation = valid.number(number)

        if (numberValidation.isValid) {
          return true
        } else {
          return false
        }
      }

      const valCardName = (name) => {
        const cardholderName = valid.cardholderName(name)

        if (cardholderName.isValid && name.length > 1) {
          return true
        } else {
          return false
        }
      }

      const valCardDate = (date) => {
        const expirationDate = valid.expirationDate(date)

        if (expirationDate.isValid) {
          return true
        } else {
          return false
        }
      }

      const valCvv = (cvv) => {
        const cvvValitation = valid.cvv(cvv)

        if (cvvValitation.isValid) {
          return true
        } else {
          return false
        }
      }

      switch (type) {
        case 'cardNumber':
          switchValidation(type, targetValue, valCardNumber(newValue))
          break
        case 'cardName':
          switchValidation(type, targetValue, valCardName(targetValue))
          break
        case 'cardDate':
          switchValidation(type, targetValue, valCardDate(targetValue))
          break
        case 'cardCvv':
          switchValidation(type, targetValue, valCvv(targetValue))
          break
        default:
          return
      }

      setPaymentInfo({
        ...paymentInfo,
        [type]: targetValue
      })
    },
    [paymentInfo, setPaymentInfo, switchValidation]
  )

  useEffect(() => {
    const { cardNumber, cardDate, cardName, cardCvv } = data
    const items = [cardNumber, cardDate, cardName, cardCvv]

    const checkout = items.every((currentInput) => currentInput.value !== '' && currentInput.valid)
    if (checkout) {
      setIsConfirmed(true)
    } else {
      setIsConfirmed(false)
    }
  })

  return (
    <>
      {isLoading}
      <Navbar step={1} />
      {!isLoading && (
        <div>
          <>
            <div>
              <Inputs
                {...cardNumber}
                value={data.cardNumber.value}
                onChange={(event) => handleChange('cardNumber', event)}
                valid={data.cardNumber.valid}
              />
              <Inputs
                {...cardName}
                value={data.cardName.value}
                onChange={(event) => handleChange('cardName', event)}
                valid={data.cardName.valid}
              />
              <Inputs
                {...cardDate}
                value={data.cardDate.value}
                onChange={(event) => handleChange('cardDate', event)}
                valid={data.cardDate.valid}
              />
              <Inputs
                {...cardCvv}
                value={data.cardCvv.value}
                onChange={(event) => handleChange('cardCvv,', event)}
                valid={data.cardCvv.valid}
              />
            </div>
            <ProductList prices={prices} />
            <Button
              text={creditCardData.buttonText}
              step="2"
              path="/success"
              disabled={!isConfirmed}
            />
          </>
        </div>
      )}
    </>
  )
}

export default PaymentPage
