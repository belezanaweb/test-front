import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Container, StepLabel } from './styles';

import { getCart } from '../../services/api';

function Header({ dispatch, step }) {
	useEffect(() => {
		getCart().then(({ data: cart }) => {
			dispatch({
				type: 'SET_CART',
				cart
			});
		});
	}, [dispatch]);

	return (
		<Container>
			<StepLabel current={step === 1}>Sacola</StepLabel>
			<StepLabel current={step === 2}>Pagamento</StepLabel>
			<StepLabel current={step === 3}>Confirmação</StepLabel>
		</Container>
	);
}

const mapStateToProps = state => ({
	step: state.step
});

export default connect(mapStateToProps)(Header);
