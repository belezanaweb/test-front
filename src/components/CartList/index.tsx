import React, { useState, useEffect } from 'react'
import CartItem from '../CartItem'

const CartList: React.FC = () => {
	const [error, setError] = useState('')
	const [cart, setCart] = useState<Cart>()

	const getCartList = async () => {
		try {
			const response = await fetch('http://www.wmocky.io/v2/5b15c4923100004a006f3c07')
			const cartApi = await response.json()
			setCart(cartApi);
		} catch (error) {
			setError(error)
		}
	}

  useEffect( () => {
		getCartList()
  }, [])
  return <section className="cart-list">
		<ul>
			{cart?.items.map( cartitem => <CartItem key={cartitem.product.sku} data={cartitem} />)}
			{error && (
				<div className="error-message">
					<p>Ops! Não conseguimos carregar o seu carrinho.</p>
				</div>
			)}
		</ul>
	</section>
}

export default CartList
