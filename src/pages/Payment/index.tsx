import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Input } from '../../components/Input'
import { Spinner } from '../../components/Spinner'
import { Summary } from '../../components/Summary'
import { Heading } from '../../components/Typography/styles'

import { useData } from '../../services/hooks/useData'

import { Row } from '../../components/Row/styles'

import { usePayment } from '../../hooks/usePayment'

import { formatCardExpirationDate, formatCardNum } from '../../utils/format'

const createPaymentFormSchema = z.object({
  cardNumber: z.string().nonempty({ message: 'Campo obrigatório' }),
  cardHolderName: z.string().nonempty({ message: 'Campo obrigatório' }),
  cardExpirationDate: z.string().nonempty({ message: 'Campo obrigatório' }),
  cardCvv: z.string().nonempty({ message: 'Campo obrigaório' }).min(3, {
    message: 'CVV precisa ter 3 números'
  })
})

export type CreatePaymentFormData = z.infer<typeof createPaymentFormSchema>

export function Payment() {
  const { data, isLoading } = useData()
  const { createPayment, payment, isPaid } = usePayment()

  console.log(payment, isPaid)

  // prettier-ignore
  const createPaymentForm = useForm<CreatePaymentFormData>({
    resolver: zodResolver(createPaymentFormSchema)
  })

  function handlePayment(data: CreatePaymentFormData) {
    createPayment(data)
  }

  const {
    handleSubmit,
    formState: { isSubmitting }
  } = createPaymentForm

  return (
    <>
      <Card>
        <Heading fontWeight={400}>Cartão de crédito</Heading>
        <FormProvider {...createPaymentForm}>
          <form onSubmit={handleSubmit(handlePayment)}>
            <div>
              <Input
                label="Número"
                placeholder="0000 0000 0000 0000"
                maxlength={19}
                onChange={(event) => {
                  const { value } = event.target
                  event.target.value = formatCardNum(value)
                }}
                name="cardNumber"
              />
            </div>
            <div>
              <Input
                label="Nome do titular do cartão"
                placeholder="Nome impresso no cartão"
                name="cardHolderName"
              />
            </div>
            <Row>
              <Input
                label="Data de validade"
                placeholder="MM/AA"
                maxlength={5}
                onChange={(event) => {
                  const { value } = event.target
                  event.target.value = formatCardExpirationDate(value)
                }}
                name="cardExpirationDate"
              />
              <Input
                label="Código CVV:"
                placeholder="000"
                maxlength={3}
                name="cardCvv"
                pattern="[0-9]*"
              />
            </Row>
          </form>
        </FormProvider>
      </Card>
      {data && !isLoading ? (
        <Summary summary={data.summary}>
          <Button
            variant="primary"
            onClick={handleSubmit(handlePayment)}
            aria-label="Submit form"
            disabled={isSubmitting}
          >
            Finalizar pedido
          </Button>
        </Summary>
      ) : (
        <Spinner />
      )}
    </>
  )
}
