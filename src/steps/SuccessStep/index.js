import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../Container';
import Section from '../../components/Section';
import CartDescription from '../../components/CartDescription';
import { Shape, Title, Payment, Products } from './styles';
import Product from './Product';

import check from '../../assets/img/check.png';

export default function SuccessStep() {
	const dispatch = useDispatch();
	const products = useSelector(state => state.cart.items || []);

	useEffect(() => {
		dispatch({
			type: 'CHANGE_STEP',
			newStep: 3
		});
	}, [dispatch]);

	return (
		<Container>
			<Shape>
				<img src={check} alt="Check symbol" />
			</Shape>
			<Title>Compra efetuada com sucesso</Title>

			<Section title={'Pagamento'} style={{ marginBottom: '1rem' }}>
				<Payment>
					<span>****.****.****.1234</span>
					<span>José da Silva</span>
					<span>05/2019</span>
				</Payment>
			</Section>
			<Section title={'Produtos'}>
				<Products>
					{products.map(product => (
						<Product key={product.product.sku} {...product.product} />
					))}
				</Products>
			</Section>
			<CartDescription />
		</Container>
	);
}
