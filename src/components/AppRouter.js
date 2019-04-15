import React, { Suspense, lazy }  from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import '../App.css'

const ShoppingCart = lazy(() => import("../containers/ShoppingCart"))
const Payment = lazy(() => import("../containers/Payment"))
const Confirmation = lazy(() => import("../containers/Confirmation"))

function AppRouter() {
  return (
    
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Switch>      
        <Route path="/" exact component={ShoppingCart} />
        <Route path="/pagamento/" component={Payment} />
        <Route path="/confirmacao/" component={Confirmation} />       
      </Switch>
      </Suspense>
    </Router>
   
  );
}

export default AppRouter;