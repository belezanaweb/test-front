import data from '../../../data.json'
import CardProducts from '../../components/CardProducts'

import { Link } from 'react-router-dom'
import Summary from '../../components/Summary'
import { Container } from '../../components/Container'
import Navbar from '../../components/Navbar'
import { Button } from '../../components/Button'
import { Flex, Text } from '@chakra-ui/react'
import { Card } from '../../components/Card'
import ProductItem from '../../components/ProductItem'
export default function Bag() {
  return (
    <Container   >
      <Navbar />
      {/* <Flex
       
        justifyContent={'space-between'}
        flexDirection={['column', 'row']}
        gap={'20px'}
      > */}
        <Card gap={'40px'} p={'20px 8px 40px 8px'}>
          {data.items.map((item) => {
            return (
              <ProductItem
                key={item.product.sku}
                image={item.product.imageObjects[0].small}
                maxPrice={item.product.priceSpecification.maxPrice}
                price={item.product.priceSpecification.price}
                name={item.product.name}
              />
            )
          })}
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
