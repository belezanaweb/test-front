import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../../components/atoms/Title/Title'
import ConfirmationMessage from '../../components/molecules/ConfirmationMessage/ConfirmationMessage'
import PaymentDetails from '../../components/molecules/PaymentDetails/PaymentDetails'
import ProductList from '../../components/molecules/ProductList/ProductList'
import ProductPrices from '../../components/molecules/ProductPrices/ProductPrices'
import { CartContext } from '../../contexts/CartContext'
import { HeaderContext } from '../../contexts/HeaderContext'
import { PaymentContext } from '../../contexts/PaymentContext'
import * as Style from './Confirmation.styles'

const Confirmation: React.FC = () : JSX.Element => {
  const { products } = useContext(CartContext)
  const { payment } = useContext(PaymentContext)
  const { setActiveItem } = useContext(HeaderContext)
  const navigate = useNavigate()

  useEffect(() => {
    setActiveItem(3)
    if (!products) {
      navigate('/')
    }
  }, [products, navigate, setActiveItem])

  return (
    <Style.Container>
      <ConfirmationMessage text='compra efetuada com sucesso' />
      <Title>pagamento</Title>
      {payment && <PaymentDetails payment={payment} />}
      <Title>produtos</Title>
      {products && <ProductList showPrice={false} sizeType={'small'} items={products.items} />}
      {products && <ProductPrices productCart={products} />}
    </Style.Container>
  )
}

export default Confirmation
