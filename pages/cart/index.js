import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'next/router';
import {} from 'react-redux';

import { Products } from '../../components/products';

class Cart extends React.Component {
	render() {
		const { props } = this;
		return (
			<>
				<Head></Head>
				<Products router={props.router} />
			</>
		);
	}
}

export default withRouter(Cart);
