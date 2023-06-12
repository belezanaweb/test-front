import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ActionContext } from '../contexts/ActionContext'
import useLoadCart from '../hooks/useLoadCart'
import { ListItem } from '../components/cart/Item'

const Cart = () => {
  const { setActionElement } = useContext(ActionContext)
  const cart = useLoadCart()

  useEffect(() => {
    setActionElement(<Link to="/payment">Seguir para o pagamento</Link>)
  }, [])

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
