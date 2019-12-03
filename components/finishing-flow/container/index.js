import React from 'react';
import style from './style.scss';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchPath, fetchProducts } from '../../products/action-creators';
import { Checkout } from '../../products/presentation/checkout';
import { Products } from '../../products/presentation/';
import { FinishingFlow } from '../presentation';

export class FinishingFlowContainer extends React.PureComponent {
	componentDidMount() {
		if (!this.props.payInfo) {
			this.props.fetchPath('/payment');
			this.props.router.push('/payment');
		}
	}
	render() {
		const { props } = this;
		if (props.isError) {
			return <h1>Internal Server Error</h1>;
		}
		if (!props.products) {
			this.props.fetchProducts();
		}
		return (
			<>
				{props.products && props.payInfo && (
					<>
						<FinishingFlow payInfo={props.payInfo} />
						<Products products={props.products.items} mods={true} />
						<Checkout
							{...props.products}
							router={props.router}
							fetchPath={props.fetchPath}
							mods={true}
						/>
					</>
				)}
			</>
		);
	}
}

const mapStateToProps = state => ({ ...state.products, ...state.global });

const mapDispatchToProps = dispatch =>
	bindActionCreators({ fetchProducts, fetchPath }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FinishingFlowContainer);
