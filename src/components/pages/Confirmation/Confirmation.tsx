import { useContext, useEffect } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { HeaderContext } from '../../../contexts/HeaderContext'
import * as Style from './Confirmation.styles'

const Confirmation: React.FC = (props) => {
  const { products } = useContext(CartContext)
  const { setActiveItem } = useContext(HeaderContext)

  useEffect(() => {
    setActiveItem(3)
  }, [setActiveItem])

  return <h1>{JSON.stringify(products)}</h1>
}

export default Confirmation
