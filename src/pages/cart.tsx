import { useContext, useEffect } from 'react'
import { ActionContext } from '../contexts/ActionContext'
import useLoadCart from '../hooks/useLoadCart'
import { ListItem } from '../components/cart'
import { LinkButton } from '../components/styles/Footer'

const Cart = () => {
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
      {!cart && <div>carregando...</div>}

      {cart &&
        cart.items.map((item) => (
          <ListItem
            key={item.product.sku}
            name={item.product.name}
            image={item.product.imageObjects[0].thumbnail}
            oldPrice={item.product.priceSpecification.maxPrice}
            price={item.product.priceSpecification.price}
          />
        ))}
    </div>
  )
}

export { Cart }
