import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Cart from './containers/Cart'
import Payment from './containers/Payment'

const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path='/pagamento' component={Payment} />
				<Route exact path='/' component={Cart} />
				<Redirect to='/' />
			</Switch>
		</Router>
	</Provider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default Root