import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import Container from '../Container';
import Section from '../../components/Section';
import CartDescription from '../../components/CartDescription';
import Button from '../../components/Button';
import { Form, Group } from './styles';

function PaymentStep({ dispatch, history }) {
	const handleClick = useCallback(() => {
		history.push('/stepThree');
	}, [history]);

	useEffect(() => {
		dispatch({
			type: 'CHANGE_STEP',
			newStep: 2
		});
	}, [dispatch]);

	return (
		<Container>
			<Section title={'Cartão de crédito'}>
				<Form>
					<Group>
						<label htmlFor="number">Número do cartão:</label>
						<input type="text" id="number" placeholder="____.____.____.____" />
					</Group>
					<Group>
						<label htmlFor="name">Nome do Titular:</label>
						<input type="text" id="name" placeholder="Como no cartão" />
					</Group>
					<Group container>
						<Group mr>
							<label htmlFor="expiration">Validade (mês/ano):</label>
							<input type="text" id="expiration" placeholder="__/____" />
						</Group>

						<Group>
							<label htmlFor="cvv">CVV:</label>
							<input type="text" id="cvv" placeholder="___" />
						</Group>
					</Group>
				</Form>
			</Section>
			<CartDescription />
			<Button text="Finalizar o pedido" onClick={handleClick} />
		</Container>
	);
}

export default connect()(PaymentStep);
