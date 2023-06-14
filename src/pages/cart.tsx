import { useContext, useEffect } from 'react'
import { ActionContext } from '../contexts/ActionContext'
import useLoadCart from '../hooks/useLoadCart'
import { LinkButton } from '../components/styles/Footer'
import { Cart } from '../components/cart'
import { Box } from '../components/styles'

const CartPage = () => {
  const { setActionElement, setSummary } = useContext(ActionContext)
  const cart = useLoadCart()

  useEffect(() => {
    setActionElement(<LinkButton to="/payment">Seguir para o pagamento</LinkButton>)
  }, [])

  useEffect(() => {
    if (cart) {
      setSummary({
        quantity: cart.items.length,
        subTotal: cart.subTotal,
        shippingTotal: cart.shippingTotal,
        discount: cart.discount,
        total: cart.total
      })
    }
  }, [cart])

  return (
    <div>
      <Box>
        {!cart && <div>carregando...</div>}
        {cart && <Cart items={cart.items} />}
      </Box>
    </div>
  )
}

export { CartPage }
