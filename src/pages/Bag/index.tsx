import data from '../../../data.json'
import { Button, Flex } from '@chakra-ui/react'
import CardProducts from '../../components/CardProducts'

import { Link } from 'react-router-dom'
import Summary from '../../components/Summary'
import { Container } from '../../components/Container'
import Navbar from '../../components/Navbar'
export default function Bag() {
  console.log('data', data)
  return (
    <Container>
      <Navbar />
      <CardProducts />
      <Summary path="/payment" text="Seguir para o pagamento">
        <Link to={'/payment'}>
          <Button
            size="lg"
            type="submit"
            colorScheme="purple"
            w="100%"
            p="16px, 8px, 16px, 8px"
            bg="#9222DC"
            color="white"
            fontFamily={'Arial'}
            mt={'24px'}
            borderRadius={'4px'}
          >
            Seguir para pagamento
          </Button>
        </Link>
      </Summary>
    </Container>
  )
}
