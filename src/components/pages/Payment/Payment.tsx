import { useContext, useEffect } from 'react'
import { HeaderContext } from '../../../contexts/HeaderContext'
import * as Style from './Payment.styles'

const Payment: React.FC = (props) => {
  const { setActiveItem } = useContext(HeaderContext)

  useEffect(() => {
    setActiveItem(2)
  }, [setActiveItem])

  return <h1>Payment</h1>
}

export default Payment
