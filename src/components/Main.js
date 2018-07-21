import React from 'react';
import { Switch, Route } from 'react-router';
import Cart from '../containers/Cart';
import Payment from '../containers/Payment';
import Confirmation from '../containers/Confirmation';
import '../styles/main.scss';

const Main = () => (
    <main className="main">
        <Switch>
            <Route exact path='/' component={Cart} />
            <Route path='/payment' component={Payment} />
            <Route path='/confirmation' component={Confirmation} />
        </Switch>
    </main>
)

export default Main;