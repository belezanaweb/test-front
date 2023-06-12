import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ActionContext } from '../contexts/ActionContext'
import useLoadCart from '../hooks/useLoadCart'

const Cart = () => {
  const { setActionElement } = useContext(ActionContext)
  const cart = useLoadCart()

  useEffect(() => {
    setActionElement(<Link to="payment">Seguir para o pagamento</Link>)
  }, [])

  return (
    <div>
      {!cart && <div>carregando...</div>}
      {cart && cart.items.map((item) => <div>{item.product.name}</div>)}
    </div>
  )
}

export { Cart }
