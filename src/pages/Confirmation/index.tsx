import { Flex, Spinner, Text } from '@chakra-ui/react'
import Summary from '../../components/Summary'
import { useContext } from 'react'
import { CheckoutContext } from '../../contexts/Checkout'
import { Card } from '../../components/Card'
import { Button } from '../../components/Button'
import ProductItem from '../../components/ProductItem'

export default function Confirmation() {
  const { resetPayment, payment, data, isLoading } = useContext(CheckoutContext)

  return (
    <>
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
        <Text>{`****.****.****.${payment.creditCardNumber.slice(-4)}`}</Text>
        <Text>{payment.name}</Text>
        <Text>{payment.expirationDate}</Text>
      </Card>

      <Card gap={'40px'} p={'20px 8px 40px 8px'}>
        <Text p={0} fontSize={'20px'} lineHeight={'24px'} fontFamily={'Jost'}>
          Produtos
        </Text>
        {!isLoading ? (
          data.items.map((item: any) => {
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
          })
        ) : (
          <Flex justifyContent={'center'}>
            <Spinner />
          </Flex>
        )}
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
    </>
  )
}
