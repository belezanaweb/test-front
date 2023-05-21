import { yupResolver } from '@hookform/resolvers/yup'

import {
  Box,
  Breadcrumb,
  Divider,
  Flex,
  HStack,
  Heading,
  Radio,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { paymentFormSchema } from '../../schemas/payment'
import { Input } from '../../components/Form/Input'

import { Link, useNavigate } from 'react-router-dom'
import { cardNumberFormatter, expirationDateFormatter } from '../../utils/formaters'
import { Card } from '../../components/Card'
import Summary from '../../components/Summary'
import { Container } from '../../components/Container'
import Navbar from '../../components/Navbar'
import { useContext } from 'react'
import { PaymentContext } from '../../contexts/payment'
import { Button } from '../../components/Button'

export type PaymentFormData = {
  name: string,
  credit_card_number: string,
  cvv: string,
  valid_date: string
}

export default function Payment() {
  // const { register, handleSubmit, formState, setValue, control, reset, watch } = useForm<PaymentFormData>({
  //   resolver: yupResolver(paymentFormSchema)
  // })
  const navigate = useNavigate()
 
 const { register, handleSubmit, formState, setValue, control, reset, watch } = useForm<PaymentFormData>({
    resolver: yupResolver(paymentFormSchema)
  })
  const { setPayment } = useContext(PaymentContext)
  const handlePayment: SubmitHandler<PaymentFormData> = async (values) => {
    setPayment(values)
    navigate('/confirmation')
  }

  return (
    <Container as="form" onSubmit={handleSubmit(handlePayment)}>
      <Navbar />

      <Card p={' 16px 8px'}>
        <VStack spacing="20px" w="100%">
          <Flex direction={'column'} w="100%">
            <Text fontSize={'20px'} lineHeight={'24px'}>
              Cartão de crédito
            </Text>
          </Flex>

          <Input
            maxLength={19}
            label="Número"
            placeholder="0000 0000 0000 0000"
            {...register('credit_card_number', {
              onChange(event) {
                setValue('credit_card_number', cardNumberFormatter(event.target.value))
              }
            })}
            error={formState.errors.credit_card_number}
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
              {...register('valid_date')}
              {...register('valid_date', {
                onChange(event) {
                  setValue('valid_date', expirationDateFormatter(event.target.value))
                }
              })}
              error={formState.errors.valid_date}
            />
            <Input
              maxLength={3}
              placeholder="000"
              label="Código CVV"
              {...register('cvv')}
              error={formState.errors.cvv}
            />
          </Flex>
        </VStack>
      </Card>
      <Summary>
        <Button type="submit">Finalizar pedido</Button>
      </Summary>
    </Container>
  )
}
