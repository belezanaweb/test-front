import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { useCart } from 'context/Cart'

import { PageContainer } from 'components/PageContainer'
import { CheckoutSummary } from 'components/CheckoutSummary'
import { ContentWrapper } from 'components/ContentWrapper'
import { CreditCardForm } from 'components/CreditCardForm'

const defaultValues = {
  cardNumber: '',
  cardName: '',
  cardExpiration: '',
  cardCvv: ''
}

const validationSchema = z.object({
  cardNumber: z.string().regex(/^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/i, {
    message: 'insira um número de cartão válido'
  }),
  cardName: z.string().min(3, { message: 'insira um nome válido' }),
  cardExpiration: z.string().regex(/^[0-9]{2}\/[0-9]{4}$/i, {
    message: 'insira uma data válida'
  }),
  cardCvv: z.string().min(3, { message: 'insira um cvv válido' })
})

export const Payment = () => {
  const { cart } = useCart()
  const navigate = useNavigate()
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(validationSchema)
  })

  useEffect(() => {
    if (methods.formState.isSubmitSuccessful) {
      navigate('/confirmation', { state: { payment: methods.getValues() } })
    }
  }, [methods.formState.isSubmitSuccessful])

  const handleSaveCreditCard = () => {
    methods.handleSubmit((data) => {
      console.log('Do something with the data', data)
    })()
  }

  if (!cart.items.length) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <FormProvider {...methods}>
      <PageContainer>
        <ContentWrapper>
          <CreditCardForm />
        </ContentWrapper>

        <CheckoutSummary
          itemsTotal={cart?.items.length}
          subTotal={cart?.subTotal}
          shippingTotal={cart?.shippingTotal}
          discount={cart?.discount}
          total={cart?.total}
          buttonTitle="Finalizar pedido"
          action={handleSaveCreditCard}
        />
      </PageContainer>
    </FormProvider>
  )
}
