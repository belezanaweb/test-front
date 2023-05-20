
import { Box, Flex, Text } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import Summary from '../../components/Summary'
import { Container } from '../../components/Container'
import Navbar from '../../components/Navbar'
import { useContext } from 'react'
import { PaymentContext } from '../../contexts/payment'
import { Card } from '../../components/Card'
import { Button } from '../../components/Button'

import ProductItem from '../../components/ProductItem'
export default function Confirmation() {
  const { resetPayment } = useContext(PaymentContext)
  const { payment, data } = useContext(PaymentContext)
  return (
    <Container>
      <Navbar />

      <Card
        p={'16px 20px'}
        align={'center'}
        color="#515151"
        fontSize={'16px'}
        lineHeight={'20px'}
        gap={'8px'}
      >
        <Text fontSize={'22px'} lineHeight={'28px'} color="#000000">
          Compra efetuada com sucesso
        </Text>
        <Text>{`****.****.****.${payment.credit_card_number.slice(-4)}`}</Text>
        <Text>{payment.name}</Text>
        <Text>{payment.valid_date}</Text>
      </Card>

      <Card gap={'40px'} p={'20px 8px 40px 8px'}>
        <Text p={0} fontSize={'20px'} lineHeight={'24px'} fontFamily={'Jost'}>
          Produtos
        </Text>
        {data?.items.map((item: any) => {
          return (
            <ProductItem
              key={item.product.sku}
              image={item.product.image}
              maxPrice={item.product.maxPrice}
              price={item.product.price}
              name={item.product.name}
              showPrice={false}
            />
          )
        })}
      </Card>

      <Summary>
        <Button
          onClick={() => {
            resetPayment()
          }}
          bg="#000000"
        >
          Voltar ao início do protótipo
        </Button>
      </Summary>
    </Container>
  )
}
