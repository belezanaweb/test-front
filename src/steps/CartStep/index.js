import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import Section from '../../components/Section';
import Button from '../../components/Button';
import CartDescription from '../../components/CartDescription';
import Container from '../Container';
import Product from './Product';
import { Products } from './styles';

export default function CartStep({ history }) {
	const products = useSelector(state => state.cart.items || []);

	const handleClick = useCallback(() => {
		history.push('/stepTwo');
	}, [history]);

	return (
		<Container>
			<Section title={'Produtos'}>
				<Products>
					{products.map(product => (
						<Product key={product.product.sku} {...product.product} />
					))}
				</Products>
			</Section>

			<CartDescription />
			<Button text="Seguir para o pagamento" onClick={handleClick} />
		</Container>
	);
}
