import useCart from '../../hooks/useCart'

export function CartTab() {
  const { data, isLoading } = useCart()
  console.log(data)
  if (isLoading) {
    return <div>loading...</div>
  }

  return <div>Cart component</div>
}

export default CartTab
