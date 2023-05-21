import { Link } from 'react-router-dom'
import Summary from '../../components/Summary'
import { Button } from '../../components/Button'
import { Flex, Spinner } from '@chakra-ui/react'
import { Card } from '../../components/Card'
import ProductItem from '../../components/ProductItem'
import { useContext } from 'react'
import { CheckoutContext } from '../../contexts/Checkout'

export default function Bag() {
  const { data, isLoading } = useContext(CheckoutContext)

  return (
    <>
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
    </>
  )
}
