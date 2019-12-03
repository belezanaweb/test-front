import React from 'react';
import { fetchPath, fetchProducts } from '../../products/action-creators';
import { fetchPayment } from '../action-creators';
import { PaymentForm } from '../presentation';
import style from './style.scss';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

export class PaymentContainer extends React.PureComponent {
	render() {
		const { props } = this;

		if (!props.products) {
			props.fetchProducts();
		}

		return (
			<>
				{props.products && (
					<>
						<PaymentForm
							products={props.products}
							router={props.router}
							fetchPath={props.fetchPath}
							fetchPayment={props.fetchPayment}
						/>
					</>
				)}
			</>
		);
	}
}

const mapStateToProps = state => ({ ...state.products });

const mapDispatchToProps = dispatch =>
	bindActionCreators({ fetchProducts, fetchPath, fetchPayment }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PaymentContainer);
