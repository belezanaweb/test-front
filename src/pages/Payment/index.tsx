import data from '../../../data.json'
import CardProducts from '../../components/CardProducts'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  Box,
  Breadcrumb,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Radio,
  SimpleGrid,
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

const {setPayment} = useContext(PaymentContext)
  const handlePayment: SubmitHandler<PaymentFormData> = async (values) => {
    console.log('Values => ', values)
    setPayment(values);
    navigate('/confirmation')
  }

  return (
    <Container as="form" onSubmit={handleSubmit(handlePayment)}>
      <Navbar/>
      <Card>
        <VStack spacing={'14px'} w="100%">
          <Flex direction={'column'} w="100%">
            <Heading size="lg">Cartão de Credito</Heading>
          </Flex>
          <Box p={'8px'} w="100%">
            <VStack spacing="8" w="100%" h="100%">
              <Input
                 maxLength={19}
                label="Número:"
                placeholder="0000 0000 0000 0000"
                {...register('credit_card_number', {
                  onChange(event) {
                    setValue('credit_card_number', cardNumberFormatter(event.target.value))
                  }
                })}
                error={formState.errors.credit_card_number}
              />
              <Input
               
                label="Nome do titular do cartão:"
                placeholder="Nome impresso no cartão"
                {...register('name')}
                error={formState.errors.name}
              />

              <Flex gap={'14px'}>
                <Input
                 maxLength={5}
                  placeholder="MM/AA"
                  label="Data de validade:"
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
                  label="Código CVV:"
                  {...register('cvv')}
                  error={formState.errors.cvv}
                />
              </Flex>
            </VStack>
          </Box>
        </VStack>
      </Card>
      <Summary path="/payment" text="Pagamento">
        <Button
          size="lg"
          colorScheme="purple"
          type="submit"
          w="100%"
          p="16px, 8px, 16px, 8px"
          bg="#9222DC"
          color="white"
          fontFamily={'Arial'}
          mt={'24px'}
          borderRadius={'4px'}
        >
          Finalizar pedido
        </Button>
      </Summary>
    </Container>
  )
}
