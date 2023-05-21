import { yupResolver } from '@hookform/resolvers/yup'
import { Flex, Text, VStack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { paymentFormSchema } from '../../schemas/payment'
import { Input } from '../../components/Form/Input'
import { useNavigate } from 'react-router-dom'
import { cardNumberFormatter, expirationDateFormatter } from '../../utils/formaters'
import { Card } from '../../components/Card'
import Summary from '../../components/Summary'
import { useContext } from 'react'
import { CheckoutContext } from '../../contexts/Checkout'
import { Button } from '../../components/Button'

export type PaymentFormData = {
  name: string,
  creditCardNumber: string,
  cvv: string,
  expirationDate: string
}

export default function Payment() {
  const navigate = useNavigate()

  const { register, handleSubmit, formState, setValue, control, reset, watch } = useForm<PaymentFormData>({
    resolver: yupResolver(paymentFormSchema)
  })

  const { setPayment } = useContext(CheckoutContext)
 
  const handlePayment: SubmitHandler<PaymentFormData> = async (values) => {
    setPayment(values)
    navigate('/confirmation')
  }

  return (
    <>
      <Card p={' 16px 8px'}>
        <VStack
          spacing="20px"
          w="100%"
          as="form"
          id="myform"
          onSubmit={handleSubmit(handlePayment)}
        >
          <Flex direction={'column'} w="100%">
            <Text fontSize={'20px'} lineHeight={'24px'}>
              Cartão de crédito
            </Text>
          </Flex>

          <Input
            maxLength={19}
            label="Número"
            placeholder="0000 0000 0000 0000"
            {...register('creditCardNumber', {
              onChange(event) {
                setValue('creditCardNumber', cardNumberFormatter(event.target.value))
              }
            })}
            error={formState.errors.creditCardNumber}
          />
          <Input
            label="Nome do titular do cartão"
            placeholder="Nome impresso no cartão"
            {...register('name')}
            error={formState.errors.name}
          />

          <Flex gap={'14px'} w="100%">
            <Input
              maxLength={7}
              placeholder="MM/AA"
              label="Data de validade"
              {...register('expirationDate')}
              {...register('expirationDate', {
                onChange(event) {
                  setValue('expirationDate', expirationDateFormatter(event.target.value))
                }
              })}
              error={formState.errors.expirationDate}
            />
            <Input
              maxLength={3}
              placeholder="000"
              label="Código CVV"
              {...register('cvv', {
                onChange(event) {
                  setValue('cvv', event.target.value.replace(/\D/g, ''))
                }
              })}
              error={formState.errors.cvv}
            />
          </Flex>
        </VStack>
      </Card>
      <Summary>
        <Button
          form="myForm"
          onClick={(e) => {
            handleSubmit(handlePayment)(e)
          }}
        >
          Finalizar pedido
        </Button>
      </Summary>
    </>
  )
}
