import * as Styles from './Cart.styles'
import { useContext, useEffect } from 'react'
import { getProducts } from '../../api/api'
import { HeaderContext } from '../../contexts/HeaderContext'
import { CartContext } from '../../contexts/CartContext'
import { ProductCart } from '../../interfaces/ProductCart.interface'
import Title from '../../components/atoms/Title/Title'
import ProductList from '../../components/molecules/ProductList/ProductList'
import ProductPrices from '../../components/molecules/ProductPrices/ProductPrices'
import Button from '../../components/atoms/Button/Button'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/organisms/Spinner/Spinner'

const Cart: React.FC = () => {
  const navigate = useNavigate()
  const { setActiveItem } = useContext(HeaderContext)
  const { products, setProducts } = useContext(CartContext)

  useEffect(() => {
    setActiveItem(1)
    getProducts().then((products: ProductCart) => {
      setProducts(products)
    })
  }, [setProducts, setActiveItem])

  const handleNextStep = () => {
    navigate('/payment')
  }

  return (
    <Styles.Container>

      {products ? <>
        <Title>produtos</Title>
        <ProductList showPrice={true} sizeType={'big'} items={products.items} />
        <ProductPrices productCart={products} />
        <Button type="button" text="seguir para o pagamento" onClick={handleNextStep} />
      </> :
        <Spinner />
      }

    </Styles.Container>
  )
}

export default Cart
