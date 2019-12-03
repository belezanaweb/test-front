import React from 'react';
import { formatLocaleCurrency } from '../helpers';
import PropTypes from 'prop-types';
import style from './style.scss';

const Checkout = props => (
	<>
		<div className="checkoutContainer">
			<p className="itemContent">
				<span className="item itemLeft">PRODUTOS</span>
				<span className="item itemRight">
					{formatLocaleCurrency(props.subTotal)}
				</span>
			</p>

			<p className="itemContent">
				<span className="item itemLeft">FRETE</span>
				<span className="item itemRight">
					{formatLocaleCurrency(props.shippingTotal)}
				</span>
			</p>

			<p className="itemContent discount">
				<span className="item itemLeft">DESCONTO</span>
				<span className="item itemRight">
					{'-' + formatLocaleCurrency(props.discount)}
				</span>
			</p>

			<p className="itemContent total">
				<span className="item itemLeft">TOTAL</span>
				<span className="item itemRight">
					{formatLocaleCurrency(props.total)}
				</span>
			</p>
		</div>
		{!props.mods && (
			<button
				onClick={() => {
					props.router.push('/payment');
					props.fetchPath('/payment');
				}}
				className="paymentButton"
			>
				SEGUIR PARA O PAGAMENTO
			</button>
		)}
	</>
);

export { Checkout };
