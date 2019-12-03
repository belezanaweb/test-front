import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'next/router';

import { FinishingFlow } from '../../components/finishing-flow';

class Success extends React.Component {
	render() {
		return (
			<>
				<Head></Head>
				<FinishingFlow router={this.props.router} />
			</>
		);
	}
}

export default withRouter(Success);
