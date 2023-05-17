import { useCheckout } from '../../stores'

const CheckoutCart = () => {
  const { checkout } = useCheckout()

  return (
    <div>
      { JSON.stringify(checkout?.items)}
      carrinho de compras
    </div>
  )
}

export default CheckoutCart;