import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Cart from './views/Cart';
import Payment from './views/Payment';
import Confirmation from './views/Confirmation';

/** -----------------------------------------------
 * Routes components
 * 
 * Objetive:
 * - Process the requests to specific route
 * 
 */
export default class Rotas extends Component {

    render() {

        return (
            <Router>
                <div>
                    <Route exact initial={true} path="/" component={Cart} />
                    <Route exact path="/payment" component={Payment} />
                    <Route exact path="/confirmation" component={Confirmation} />
                </div>
            </Router>
        )
    }
}
