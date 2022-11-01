import React, { useState, useCallback } from 'react'

import { useCreditCard } from '../../hooks/creditCard'

import Card from '../Card'
import Input from '../Input'

import { Form, Warper } from './styles'

interface Props {
  formId: string
  formSubmitted: () => void
}

interface Error {
  [key: string]: boolean
}

const CreditCardForm: React.FC<Props> = ({ formId, formSubmitted }) => {
  const { formData } = useCreditCard()

  const [error, setError] = useState<Error>({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    e?.preventDefault()
    if (FormDataIsValid()) formSubmitted()
  }

  const cardBrands = [
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
  ]

  const FormDataIsValid = useCallback(() => {
    let errorObj = { valid: true }

    Object.keys(formData).forEach((data) => {
      let isValid

      switch (data) {
        case 'number':
          const formattedStr = formData.number?.replaceAll('.', '')
          isValid = cardBrands.some((regex) => formattedStr.match(regex[1]))
          break
        case 'name':
          isValid = formData.name?.match(/^[a-zA-Z]{2,30}$/g)
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
      errorObj = { ...errorObj, [data]: !isValid, valid: errorObj.valid && !!isValid }
    })

    setError(errorObj)

    return errorObj.valid
  }, [formData])

  return (
    <Card>
      <Form id={formId} onSubmit={handleSubmit}>
        <Input
          name={'number'}
          onlyNumbers
          placeholder={'____.____.____.____'}
          maskPattern={'####.####.####.####'}
          maskDivider={'.'}
          label={'Número do cartão:'}
          errorLabel={'Número do cartão inválido'}
          hasError={error.number}
        />
        <Input
          name={'name'}
          placeholder={'Como no cartão'}
          label={'Nome do Titular:'}
          errorLabel={'Nome de titular inválido'}
          hasError={error.name}
        />
        <Warper>
          <Input
            name={'expiry'}
            onlyNumbers
            placeholder={'__/____'}
            maskPattern={'##/####'}
            maskDivider={'/'}
            label={'Validade (mês/ano):'}
            errorLabel={'Data inválida'}
            hasError={error.expiry}
          />
          <Input
            name={'cvv'}
            onlyNumbers
            placeholder={'___'}
            maskPattern={'###'}
            label={'CVV:'}
            errorLabel={'CVV inválido'}
            hasError={error.cvv}
          />
        </Warper>
      </Form>
    </Card>
  )
}

export default CreditCardForm
