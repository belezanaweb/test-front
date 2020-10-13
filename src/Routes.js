import React from 'react'
import {BrowserRouter , Switch , Route, Redirect} from 'react-router-dom'
import ShoppingCart from './pages/Cart'
import Payment from './pages/Cart'
import Confirmation from './pages/Cart'
import NotFound from './pages/404'

export default() =>(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ShoppingCart}></Route>
                <Route exact path="/pagamento" component={Payment}></Route>
                <Route exact path="/confirmacao" component={Confirmation}></Route>
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </BrowserRouter>
)