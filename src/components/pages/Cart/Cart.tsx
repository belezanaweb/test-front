import * as Style from './Cart.styles'
import { useContext, useEffect } from 'react'
import { getProducts } from '../../api/api'
import { HeaderContext } from '../../../contexts/HeaderContext'
import { CartContext } from '../../../contexts/CartContext'
import { ProductCart } from '../../../interfaces/ProductCart.interface'

const Cart: React.FC = (props) => {
  const { setActiveItem } = useContext(HeaderContext)
  const { products, setProducts } = useContext(CartContext)

  useEffect(() => {
    setActiveItem(1)
  }, [setActiveItem])

  useEffect(() => {
    getProducts().then((products: ProductCart[]) => {
      setProducts(products)
    })
  }, [setProducts])

  return <h1>{JSON.stringify(products)}</h1>
}

export default Cart
