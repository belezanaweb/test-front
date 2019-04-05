import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './containers/App'

const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path='/' component={App} />
				<Redirect to='/' />
			</Switch>
		</Router>
	</Provider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default Root