import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../../contexts/CartContext'
import { HeaderContext } from '../../../contexts/HeaderContext'
import Button from '../../atoms/Button/Button'
import { Title } from '../../atoms/Title/Title.styles'
import ProductPrices from '../../molecules/ProductPrices/ProductPrices'
import * as Style from './Payment.styles'

const Payment: React.FC = (props) => {
  const navigate = useNavigate()
  const { setActiveItem } = useContext(HeaderContext)
  const { products } = useContext(CartContext)

  const handleNextStep = () => {
    navigate('/confirmation')
  }

  useEffect(() => {
    setActiveItem(2)
    if (!products) {
      navigate('/')
    }
  }, [products, navigate, setActiveItem])

  return (
    <Style.Container>
      <Title>cartão de crédito</Title>
      {products && <ProductPrices productCart={products} />}
      <Button type="button" text="finalizar pedido" onClick={handleNextStep} />
    </Style.Container>
  )
}

export default Payment
