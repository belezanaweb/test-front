import React from 'react'
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import ShoppingCart from './ShoppingCart'
import Payment from './ShoppingCart'
import Confirmation from './ShoppingCart'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ShoppingCart}></Route>
                <Route exact path="/pagamento" component={Payment}></Route>
                <Route exact path="/confirmacao" component={Confirmation}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;