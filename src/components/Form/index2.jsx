import { Card } from '@app/model/card.model'
import cardValidator from 'card-validator'
import { useState } from 'react'
import * as yup from 'yup'
import { SchemaOf } from 'yup'

import { onlyNumbers } from '@/utils'
import cardBrands from '@/utils/card-brands'
import { getDynamicMask } from '@/utils/card-number.formatter'

const FROM_YEAR = Number(new Date().getFullYear().toFixed().substr(2))

const secureCardSchema: SchemaOf<Card> = yup.object().shape({
  number: yup.string().min(15).required().matches(/[\d]/g),
  holder_name: yup.string().required(),
  cvv: yup.string().min(3).max(4).required(),
  exp_month: yup.string().required().min(1).max(12),
  exp_year: yup
    .string()
    .required()
    .min(FROM_YEAR)
    .max(FROM_YEAR + 30),
  label: yup.string()
})

export const useValidateCard = () => {
  const [isValid, setIsValid] = useState(null)
  const [error, setError] = useState(null)
  const [cardParams, setCardParams] = useState(null)
  const [cardNumberMask, setCardNumberMask] = useState('9999 9999 9999 9999')
  const [brand, setBrand] = useState(null)
  const [brandImage, setBrandImage] = useState(null)

  const identifyCard = (cardNumber: string) => {
    const validation = cardValidator.number(onlyNumbers(cardNumber))
    const brandType = cardBrands[validation.card?.type] || null
    setCardParams(validation.card)
    setIsValid(validation.isValid)
    setBrand(validation.card?.type)
    setBrandImage(brandType ? brandType : null)
    if (validation.card) {
      setCardNumberMask(getDynamicMask(validation.card?.gaps, validation.card?.lengths.pop() || 16))
    } else {
      setCardNumberMask('9999 9999 9999 9999')
    }
  }

  const validateDate = (date: string, onValidated?: (success: any, error: any) => void) => {
    const validation = cardValidator.expirationDate(date)
    if (!validation.isValid) {
      return 'Data inválida!'
    } else {
      return true
    }
  }

  const validateCVV = (codeNumber: number) => cardValidator.cvv(codeNumber, cardParams?.code.size)

  const validateSecuredCard = (card: Card) => secureCardSchema.validate(card)

  return {
    isValid,
    identifyCard,
    validateDate,
    validateCVV,
    validateSecuredCard,
    brandImage,
    label: brand,
    cardNumberMask,
    cardParams
  }
}
