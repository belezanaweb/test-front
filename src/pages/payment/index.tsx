import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { useCart } from 'context/Cart'
import { useGetCart } from 'hooks/api/useGetCart'

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
  cardExpiration: z.string().regex(/^[0-9]{2}\/[0-9]{2}$/i, {
    message: 'insira uma data válida'
  }),
  cardCvv: z.string().min(3, { message: 'insira um cvv válido' })
})

export const Payment = () => {
  const { setCart } = useCart()
  const { data, isLoading } = useGetCart()
  const navigate = useNavigate()
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(validationSchema)
  })

  useEffect(() => {
    if (!isLoading && data) {
      setCart(data)
    }
  }, [data])

  useEffect(() => {
    if (methods.formState.isSubmitSuccessful) {
      navigate('/confirmation')
    }
  }, [methods.formState.isSubmitSuccessful])

  const handleSaveCreditCard = () => {
    methods.handleSubmit((data) => {
      console.log(data)
    })()
  }

  return (
    <FormProvider {...methods}>
      <PageContainer>
        <ContentWrapper>
          <CreditCardForm />
        </ContentWrapper>

        <CheckoutSummary
          itemsTotal={data?.items.length}
          subTotal={data?.subTotal}
          shippingTotal={data?.shippingTotal}
          discount={data?.discount}
          total={data?.total}
          buttonTitle="Finalizar pedido"
          action={handleSaveCreditCard}
        />
      </PageContainer>
    </FormProvider>
  )
}
