import { useCheckoutContext } from 'context/checkout.context'
import { useCallback, useMemo } from 'react'

interface IInput {
  value: string,
  label: string,
  placeholder: string,
  isValid: boolean,
  handleChange: (value: string) => void,
  className?: string,
  autocomplete: string
}

export const usePaymentForm = (): { inputs: IInput[], buttonEnabled: boolean } => {
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

  const isExpDateValid = useCallback(() => {
    const date = paymentInfo.expDate ?? ''

    if (date.length !== 7) return false

    const [m, y] = date.split('/')
    console.log(`m: ${m}, y: ${y}`)
    const month = Number(m)
    const year = Number(y)

    switch (true) {
      // no matter what, month must be smaller than 12
      case month > 12:
        return false

      // if this year, month must be greater than this month
      case year === new Date().getFullYear():
        return month > new Date().getMonth() + 1

      // if not this year, year must be greather than current
      case year !== new Date().getFullYear():
        return year > new Date().getFullYear()

      default:
        return false
    }
  }, [paymentInfo.expDate])

  const inputs = useMemo<IInput[]>(
    () => [
      {
        value: paymentInfo.number,
        label: 'Número do cartão:',
        placeholder: '____.____.____.____',
        isValid: paymentInfo.number?.length === '____.____.____.____'.length,
        handleChange: (value: string) => handleCardChange(value),
        className: 'full',
        autocomplete: 'cc-number'
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
        isValid: isExpDateValid(),
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
    [paymentInfo, handleCardChange, handleExpDateChange, isExpDateValid, setPaymentInfo]
  )

  const buttonEnabled = useMemo(
    () =>
      Object.values(inputs).reduce < boolean > ((prev, current) => prev && current.isValid, true),
    [inputs]
  )

  return { inputs, buttonEnabled }
}
