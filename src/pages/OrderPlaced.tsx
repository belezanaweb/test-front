import { useLocation } from 'react-router-dom'

function OrderPlaced() {
  const { state } = useLocation()
  return <div>OrderPlaced</div>
}

export default OrderPlaced
