import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = props => {
	const [data, setData] = useState({
		cardNum: { value: '', valid: null },
		name: { value: '', valid: null },
		validateData: { value: '', valid: null },
		cvv: { value: '', valid: null },
		cart: {
			cartStep: 0,
		},
		store: {}
	}
	);

	return (
		<CartContext.Provider value={[data, setData]}>
			{props.children}
		</CartContext.Provider>
	);
}