import React from 'react';
import { connect } from 'react-redux';

import parseMoney from '../../utils/parseMoney';
import { Container, Group } from './styles';

function CartDescription({ subTotal, shippingTotal, discount, total }) {
	return (
		<Container>
			<Group>
				<span>Produtos</span>
				<span>{parseMoney(subTotal)}</span>
			</Group>
			<Group>
				<span>Frete</span>
				<span>{parseMoney(shippingTotal)}</span>
			</Group>
			<Group discount>
				<span>Desconto</span>
				<span>- {parseMoney(discount)}</span>
			</Group>
			<Group>
				<strong>Total</strong>
				<strong>{parseMoney(total)}</strong>
			</Group>
		</Container>
	);
}

const mapStateToProps = state => ({
	subTotal: state.cart.subTotal,
	shippingTotal: state.cart.shippingTotal,
	discount: state.cart.discount,
	total: state.cart.total
});

export default connect(mapStateToProps)(CartDescription);
