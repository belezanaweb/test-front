import * as Style from './Cart.styles'
import { useContext, useEffect } from 'react'
import { getProducts } from '../../../api/api'
import { HeaderContext } from '../../../contexts/HeaderContext'
import { CartContext } from '../../../contexts/CartContext'
import { ProductCart } from '../../../interfaces/ProductCart.interface'
import Title from '../../atoms/Title/Title'
import ProductList from '../../molecules/ProductList/ProductList'
import ProductPrices from '../../molecules/ProductPrices/ProductPrices'
import Button from '../../atoms/Button/Button'
import { useNavigate } from 'react-router-dom'

const Cart: React.FC = () => {
  const navigate = useNavigate()
  const { setActiveItem } = useContext(HeaderContext)
  const { products, setProducts } = useContext(CartContext)

  useEffect(() => {
    setActiveItem(1)
  }, [setActiveItem])

  useEffect(() => {
    getProducts().then((products: ProductCart) => {
      setProducts(products)
    })
  }, [setProducts])

  const handleNextStep = () => {
    navigate('/payment')
  }

  return (
    <Style.Container>
      <Title>Produtos</Title>
      {products && <ProductList showPrice={true} sizeType={'big'} items={products.items} />}
      {products && <ProductPrices productCart={products} />}
      <Button type="button" text="seguir para o pagamento" onClick={handleNextStep} />
    </Style.Container>
  )
}

export default Cart
