import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import Container from '../Container';
import Section from '../../components/Section';
import Button from '../../components/Button';
import CartDescription from '../../components/CartDescription';
import Form from './Form';

function PaymentStep({ dispatch, history, validForm }) {
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

const mapStateToProps = state => ({
	validForm: state.form.valid
});
export default connect(mapStateToProps)(PaymentStep);
