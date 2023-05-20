import data from '../../../data.json'
import CardProducts from '../../components/CardProducts'

import { Link } from 'react-router-dom'
import Summary from '../../components/Summary'
import { Container } from '../../components/Container'
import Navbar from '../../components/Navbar'
import { Button } from '../../components/Button'
export default function Bag() {
  console.log('data', data)
  return (
    <Container>
      <Navbar />
      <CardProducts />
      <Summary path="/payment" text="Seguir para o pagamento">
        <Link to={'/payment'}>
          <Button type="submit">Seguir para pagamento</Button>
        </Link>
      </Summary>
    </Container>
  )
}
