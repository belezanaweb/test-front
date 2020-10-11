import React from 'react'
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Home from './ShoppingCart'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;