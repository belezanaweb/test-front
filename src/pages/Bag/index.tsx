import { Link } from 'react-router-dom'
import Summary from '../../components/Summary'
import { Container } from '../../components/Container'
import Navbar from '../../components/Navbar'
import { Button } from '../../components/Button'
import { Flex, Spinner, Text } from '@chakra-ui/react'
import { Card } from '../../components/Card'
import ProductItem from '../../components/ProductItem'
import { useContext } from 'react'
import { PaymentContext } from '../../contexts/payment'
export default function Bag() {
  const { data, isLoading } = useContext(PaymentContext)

  console.log('data', data?.items)
  return (
    <Container>
      <Navbar />
      {/* <Flex
       
        justifyContent={'space-between'}
        flexDirection={['column', 'row']}
        gap={'20px'}
      > */}
      <Card gap={'40px'} p={'20px 8px 40px 8px'}>
        {!isLoading ? (
          data.items.map((item: any) => {
            return (
              <ProductItem
                key={item.product.sku}
                image={item.product.image}
                maxPrice={item.product.maxPrice}
                price={item.product.price}
                name={item.product.name}
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
        <Link to={'/payment'}>
          <Button>Seguir para pagamento</Button>
        </Link>
      </Summary>
      {/* </Flex> */}
    </Container>
  )
}
