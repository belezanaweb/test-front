import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../Container';
import Section from '../../components/Section';
import Button from '../../components/Button';
import CartDescription from '../../components/CartDescription';
import Form from './Form';

export default function PaymentStep({ history }) {
	const dispatch = useDispatch();
	const validForm = useSelector(state => state.form.valid);

	const handleClick = useCallback(() => {
		if (validForm) history.push('/stepThree');
	}, [validForm, history]);

	useEffect(() => {
		dispatch({
			type: 'CHANGE_STEP',
			newStep: 2
		});
	}, [dispatch]);

	return (
		<Container>
			<Section title={'Cartão de crédito'}>
				<Form />
			</Section>
			<CartDescription />
			<Button text="Finalizar o pedido" onClick={handleClick} />
		</Container>
	);
}
