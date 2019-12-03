import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'next/router';
import { PaymentComponent } from '../../components/payment';
class Payment extends React.Component {
	render() {
		const { props } = this;
		return (
			<>
				<Head></Head>
				<PaymentComponent router={props.router} />
			</>
		);
	}
}

export default withRouter(Payment);
