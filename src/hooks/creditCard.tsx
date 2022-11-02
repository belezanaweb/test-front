import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'

interface Props {
  children: React.ReactNode
}

interface Error {
  [key: string]: boolean
}

interface FormData {
  [key: string]: string
}
interface UseCreditCard {
  formData: FormData
  handleChange: (name: string, value: string) => void
  formIsValid: boolean
  error: Error
}

const CreditCardContext = createContext<UseCreditCard>({} as UseCreditCard)

const CreditCardProvider: React.FC<Props> = ({ children }) => {
  const [formIsValid, setFormIsValid] = useState<boolean>(false)

  const [formData, setFormData] = useState<FormData>({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  })

  const [error, setError] = useState<Error>({
    number: false,
    name: false,
    expiry: false,
    cvv: false
  })

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const cardBrands = useMemo(() => [
    ["Amex Card", /^3[47][0-9]{13}$/],
    ["BCGlobal", /^(6541|6556)[0-9]{12}$/],
    ["Carte Blanche Card", /^389[0-9]{11}$/],
    ["Diners Club Card", /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/],
    ["Discover Card", /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/],
    ["Insta Payment Card", /^63[7-9][0-9]{13}$/],
    ["JCB Card", /^(?:2131|1800|35\d{3})\d{11}$/],
    ["KoreanLocalCard", /^9[0-9]{15}$/],
    ["Laser Card", /^(6304|6706|6709|6771)[0-9]{12,15}$/],
    ["Maestro Card", /^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/],
    ["Mastercard", / ^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/],
    ["Solo Card", /^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$/],
    ["Switch Card", /^(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}$/],
    ["Union Pay Card", /^(62[0-9]{14,17})$/],
    ["Visa Card", /^4[0-9]{12}(?:[0-9]{3})?$/],
    ["Visa Master Card", /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/],
  ], [])

  useEffect(() => {
    let errorObj = { ...error }

    Object.keys(formData).forEach((data) => {
      let isValid

      switch (data) {
        case 'number':
          const formattedStr = formData.number?.replaceAll('.', '')
          isValid = cardBrands.some((regex) => formattedStr.match(regex[1]))
          break
        case 'name':
          isValid = formData.name?.match(/^[a-zA-Z ]{2,30}$/g)
          break
        case 'expiry':
          const today = new Date()
          isValid =
            formData.expiry?.match(/^((0[1-9])|(1[0-2]))\/(\d{4})$/g) &&
            new Date(`01/${formData.expiry}`).getTime() > today.getTime()
          break
        case 'cvv':
          isValid = formData.cvv?.match(/\d{3}/g)
          break
        default:
          break
      }

      errorObj[data] = !(formData[data] === '' ) && !isValid
      setFormIsValid(!!isValid)
    })

    setError(errorObj)
  }, [formData])

  return (
    <CreditCardContext.Provider value={{ formData, handleChange, formIsValid, error }}>
      {children}
    </CreditCardContext.Provider>
  )
}

function useCreditCard() {
  const context = useContext(CreditCardContext)

  if (!context) {
    throw new Error('useCreditCard must be use within a CreditCardProvider')
  }

  return context
}

export { CreditCardProvider, useCreditCard }
