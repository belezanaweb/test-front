import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import Section from '../../components/Section';
import Button from '../../components/Button';
import CartDescription from '../../components/CartDescription';
import Container from '../Container';
import Product from './Product';
import { Products } from './styles';

function CartStep({ products, history }) {
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

const mapStateToProps = state => ({
	products: state.cart.items || []
});

export default connect(mapStateToProps)(CartStep);
