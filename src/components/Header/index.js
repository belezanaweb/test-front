import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Wrapper, Container, StepLabel } from './styles';

import { getCart } from '../../services/api';

export default function Header() {
	const dispatch = useDispatch();
	const step = useSelector(state => state.step);

	useEffect(() => {
		getCart().then(({ data: cart }) => {
			dispatch({
				type: 'SET_CART',
				cart
			});
		});
	}, [dispatch]);

	return (
		<Wrapper>
			<Container>
				<StepLabel current={step === 1}>Sacola</StepLabel>
				<StepLabel current={step === 2}>Pagamento</StepLabel>
				<StepLabel current={step === 3}>Confirmação</StepLabel>
			</Container>
		</Wrapper>
	);
}
