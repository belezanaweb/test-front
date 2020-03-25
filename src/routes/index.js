import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CartStep from '../steps/CartStep';
import PaymentStep from '../steps/PaymentStep';
import SuccessStep from '../steps/SuccessStep';

const Routes = () => (
	<Switch>
		<Redirect exact from="/" to="/stepOne" />
		<Route path="/stepOne" component={CartStep} />
		<Route path="/stepTwo" component={PaymentStep} />
		<Route path="/stepThree" component={SuccessStep} />
	</Switch>
);

export default Routes;
