import data from '../../../data.json'
import { Button, Flex } from '@chakra-ui/react'
import CardProducts from '../../components/CardProducts'

import { Link } from 'react-router-dom'
import Summary from '../../components/Summary'
import { Container } from '../../components/Container'
import Navbar from '../../components/Navbar'
import { useContext } from 'react'
import { PaymentContext } from '../../contexts/payment'
export default function Confirmation() {
  const { resetPayment } = useContext(PaymentContext)

  return (
    <Container>
      <Navbar />
      <CardProducts showPrice={false} />
      <Summary path="/payment" text="Seguir para o pagamento">
        <Button
          size="lg"
          onClick={() => {
            resetPayment()
          }}
          type="submit"
          colorScheme="purple"
          p="16px, 8px, 16px, 8px"
          bg="#9222DC"
          color="white"
          fontFamily={'Arial'}
          mt={'24px'}
          borderRadius={'4px'}
        >
          Recomeçar
        </Button>
      </Summary>
    </Container>
  )
}
