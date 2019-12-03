import React from 'react';
import style from './style.scss';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchProducts, fetchPath } from '../action-creators';
import { Products } from '../presentation';
import { Checkout } from '../presentation/checkout';
import { Loading } from '../presentation/loading';

export class ProductsContainer extends React.PureComponent {
	static propTypes = {
		products: PropTypes.any,
		isLoading: PropTypes.bool,
		isError: PropTypes.bool,
		router: PropTypes.object,
		fetchProducts: PropTypes.func
	};

	componentDidMount() {
		this.props.fetchProducts();
		this.props.fetchPath('/cart');
	}
	render() {
		const { props } = this;
		if (props.isError) {
			return <h1>Internal Server Error</h1>;
		}

		if (props.isLoading) {
			return <Loading />;
		}

		return (
			<>
				{!props.isError && !props.isLoading && (
					<>
						<Products products={props.products.items} />
						<Checkout
							{...props.products}
							router={props.router}
							fetchPath={props.fetchPath}
						/>
					</>
				)}
			</>
		);
	}
}

const mapStateToProps = state => ({ ...state.products });

const mapDispatchToProps = dispatch =>
	bindActionCreators({ fetchProducts, fetchPath }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
