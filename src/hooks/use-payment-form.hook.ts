import { useCheckoutContext } from 'context/checkout.context'
import { useState, useCallback, useMemo } from 'react'

export const usePaymentForm = () => {

  const { paymentInfo, setPaymentInfo } = useCheckoutContext()

  const handleCardChange = useCallback(
    (value: string) => {
      switch (true) {
        case value.length === 16: {
          const clean = value.replace(/\./g, '')
          const str = [
            clean.substr(0, 4),
            clean.substr(4, 4),
            clean.substr(8, 4),
            clean.substr(12, 4)
          ].join('.')
          setPaymentInfo({ ...paymentInfo, number: str })
          break
        }
        case value.length >= '____.____.____.____'.length:
          return
        default:
          const clean = value.replace(/[^0-9.]/g, '')
          setPaymentInfo({ ...paymentInfo, number: clean })
      }
    },
    [paymentInfo, setPaymentInfo]
  )

  const handleExpDateChange = useCallback(
    (value: string) => {
      switch (true) {
        case value.length === 6: {
          const clean = value.replace(/\//g, '')
          const str = [clean.substr(0, 2), clean.substr(2, 4)].join('/')
          setPaymentInfo({ ...paymentInfo, expDate: str })
          break
        }
        case value.length >= '__/____'.length:
          return
        default:
          const clean = value.replace(/[^0-9.]/g, '')
          setPaymentInfo({ ...paymentInfo, expDate: clean })
      }
    },
    [paymentInfo, setPaymentInfo]
  )

  const inputs = useMemo(
    () => [
      {
        value: paymentInfo.number,
        label: 'Número do cartão:',
        placeholder: '____.____.____.____',
        isValid: paymentInfo.number?.length === '____.____.____.____'.length,
        handleChange: (value: string) => handleCardChange(value),
        className: 'full',
        autocomplete: 'cc-number',
      },
      {
        value: paymentInfo.name,
        label: 'Nome do Titular:',
        placeholder: 'Como no cartão',
        isValid: paymentInfo.name?.includes(' ') ?? false,
        handleChange: (value: string) => setPaymentInfo({ ...paymentInfo, name: value }),
        className: 'full',
        autocomplete: 'cc-name'
      },
      {
        value: paymentInfo.expDate,
        label: 'Validade (mês/ano):',
        placeholder: '__/____',
        isValid: paymentInfo.expDate?.length === 7,
        handleChange: (value: string) => handleExpDateChange(value),
        autocomplete: 'cc-exp'
      },
      {
        value: paymentInfo.cvv,
        label: 'CVV:',
        placeholder: '___',
        isValid: paymentInfo.cvv?.length === 3,
        handleChange: (value: string) => setPaymentInfo({ ...paymentInfo, cvv: value }),
        autocomplete: 'cc-csc'
      }
    ],
    [paymentInfo, handleCardChange, handleExpDateChange]
  )

  const buttonEnabled = useMemo(
    () =>
      Object.values(inputs).reduce < boolean > ((prev, current) => prev && current.isValid, true),
    [inputs]
  )

  return { inputs, buttonEnabled }
}
