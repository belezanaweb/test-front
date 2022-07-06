import React, { useCallback, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/atoms'
import { BagDetails } from '../../components/molecules'
import { FormData, PaymentForm } from '../../components/molecules/paymentForm/PaymentForm'
import { BagContext } from '../../contexts/BagContext'
import { HeaderContext } from '../../contexts/HeaderContext'
import { PaymentFormContext } from '../../contexts/PaymentFormContext'
import { FormContainer } from './Payment.style'

export const Payment = () => {
  const { setHeaderPosition } = useContext(HeaderContext)
  const bag = useContext(BagContext)
  const { setFormValues } = useContext(PaymentFormContext)
  const navigate = useNavigate()

  const {
    register,
    formState: { errors, isValid },
    getValues
  } = useForm<FormData>({
    mode: 'onBlur'
  })

  const handleConfirmButton = useCallback(() => {
    setFormValues(getValues())
    navigate('/confirmation')
  }, [setFormValues, getValues, navigate])

  useEffect(() => {
    setHeaderPosition(1)
  }, [setHeaderPosition])

  return (
    <>
      <FormContainer>
        <PaymentForm register={register} errors={errors} />
        {bag && <BagDetails bag={bag} />}
        <Button onClick={handleConfirmButton} disabled={!isValid}>
          finalizar o pedido
        </Button>
      </FormContainer>
    </>
  )
}
