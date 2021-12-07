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
import { Form } from 'antd'
import { useDispatch } from 'react-redux'
import { setCard } from 'redux/slices/checkout'
import utils from 'utils'

const { Paragraph, Heading6 } = Typography

export default function Payment() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { products, info, loading } = useSelector((state) => state.checkout)
  const [form] = Form.useForm()

  const onSubmit = () => {
    form.validateFields().then((values) => {
      dispatch(
        setCard({
          number: utils.hideCardNumber(values.cardNumber),
          name: values.cardName,
          date: values.cardDate
        })
      )
      navigate('/confirmation')
    })
  }

  useEffect(() => {
    if (!products.length) navigate('/')
  }, [products, info, navigate])

  return (
    <Container>
      <Form form={form}>
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
            <Form.Item
              name="cardNumber"
              rules={[
                {
                  required: true,
                  message: 'Informe o número do cartão.'
                }
              ]}
            >
              <InputMasked mask="9999.9999.9999.9999" placeholder="____.____.____.____" block />
            </Form.Item>
          </DivHelper>
          <DivHelper mb={10}>
            <Heading6 color="secondary" bold>
              Nome do titular
            </Heading6>
            <Form.Item
              name="cardName"
              rules={[
                {
                  required: true,
                  message: 'Informe o nome do cartão.'
                }
              ]}
            >
              <InputText placeholder="Como no cartão" block />
            </Form.Item>
          </DivHelper>
          <Flex justifyContent="space-between">
            <DivHelper mb={10} w={50}>
              <Heading6 color="secondary" bold>
                Validade (mês/ano):
              </Heading6>
              <Form.Item
                name="cardDate"
                rules={[
                  {
                    required: true,
                    message: 'Informe a data do cartão.'
                  }
                ]}
              >
                <InputMasked mask="99/9999" placeholder="__/____" block />
              </Form.Item>
            </DivHelper>
            <DivHelper mb={10} w={45}>
              <Heading6 color="secondary" bold>
                CVV:
              </Heading6>
              <Form.Item
                name="cardCVV"
                rules={[
                  {
                    required: true,
                    message: 'Informe o CVV do cartão.'
                  }
                ]}
              >
                <InputMasked mask="999" placeholder="___" block />
              </Form.Item>
            </DivHelper>
          </Flex>
        </Card>
        <CartInfo data={info} loading={loading} />
        <Button onClick={() => onSubmit()} block>
          Finalizar o Pedido
        </Button>
      </Form>
    </Container>
  )
}
