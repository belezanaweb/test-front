import React, { useEffect } from 'react'
import {
  Button,
  Typography,
  Container,
  DivHelper,
  Card,
  CartInfo,
  InputText,
  Flex
} from 'components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import InputMasked from 'components/InputMasked'
import { useForm } from 'react-hook-form'

const { Paragraph, Heading6 } = Typography

export default function Payment() {
  const navigate = useNavigate()
  const { products, info, loading } = useSelector((state) => state.checkout)
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  useEffect(() => {
    if (!products.length) navigate('/')
  }, [products, info, navigate])

  return (
    <Container>
      <DivHelper pl={10} pb={5}>
        <Paragraph color="secondary" uppercase bold>
          Cartão de Crédito
        </Paragraph>
      </DivHelper>
      <Card>
        <DivHelper mb={10}>
          <Heading6 color="secondary" bold>
            Número do cartão
          </Heading6>
          <InputMasked
            {...register('cardNumber', { required: true })}
            mask="9999.9999.9999.9999"
            placeholder="____.____.____.____"
            block
          />
        </DivHelper>
        <DivHelper mb={10}>
          <Heading6 color="secondary" bold>
            Nome do titular
          </Heading6>
          <InputText
            {...register('cardName', { required: true })}
            placeholder="Como no cartão"
            block
          />
        </DivHelper>
        <Flex justifyContent="space-between">
          <DivHelper mb={10} w={50}>
            <Heading6 color="secondary" bold>
              Validade (mês/ano):
            </Heading6>
            <InputMasked
              {...register('cardDate', { required: true })}
              mask="99/9999"
              placeholder="__/____"
              block
            />
          </DivHelper>
          <DivHelper mb={10} w={45}>
            <Heading6 color="secondary" bold>
              CVV:
            </Heading6>
            <InputMasked
              {...register('cardCVV', { required: true })}
              mask="999"
              placeholder="___"
              block
            />
          </DivHelper>
        </Flex>
      </Card>
      <CartInfo data={info} loading={loading} />
      <Button onClick={() => handleSubmit(onSubmit)} block>
        Finalizar o Pedido
      </Button>
    </Container>
  )
}
