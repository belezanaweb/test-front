import React, { useCallback, useContext, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { BagDetails, FormData, PaymentForm } from '../../components/molecules'
import { BagContext } from '../../contexts/BagContext'
import { HeaderContext } from '../../contexts/HeaderContext'
import { PaymentFormContext } from '../../contexts/PaymentFormContext'
import { maskCreditCard } from '../../utils/mask'
import { FormContainer } from './Payment.style'

export const Payment = () => {
  const { setHeaderPosition } = useContext(HeaderContext)
  const { bag } = useContext(BagContext)
  const { setFormValues } = useContext(PaymentFormContext)
  const navigate = useNavigate()

  const methods = useForm<FormData>({
    mode: 'all'
  })

  const {
    register,
    formState: { errors, isValid },
    getValues
  } = methods

  const handleConfirmButton = useCallback(() => {
    const values = getValues()
    const cardNumber = maskCreditCard(values.cardNumber)
    setFormValues({ ...values, cardNumber })
    navigate('/confirmation')
  }, [setFormValues, getValues, navigate])

  useEffect(() => {
    setHeaderPosition(1)
    if (!bag) {
      navigate('/')
    }
  }, [bag, navigate, setHeaderPosition])

  return (
    <FormProvider {...methods}>
      <FormContainer>
        <PaymentForm register={register} errors={errors} />
        {bag && (
          <BagDetails
            bag={bag}
            buttonData={{
              label: 'finalizar o pedido',
              action: handleConfirmButton,
              disabled: !isValid
            }}
          />
        )}
      </FormContainer>
    </FormProvider>
  )
}
