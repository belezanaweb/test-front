import React from 'react'
import { AppWrapper, GlobalStyle } from './AppStyle'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Bag from './pages/Bag'
import Payment from './pages/Payment'
import Confirmation from './pages/Confirmation'
import { useRequestData } from './hooks/useRequestData'
import ProductsContext from './contexts/ProductsContext'

const App = () => {
  const data = useRequestData()

  return (
    <ProductsContext.Provider value={data}>
      <Router>
        <GlobalStyle />
        <AppWrapper>
          <Switch>
            <Route exact path="/">
              <Bag />
            </Route>
            <Route exact path="/payment">
              <Payment />
            </Route>
            <Route exact path="/confirmation">
              <Confirmation />
            </Route>
          </Switch>
        </AppWrapper>
      </Router>
    </ProductsContext.Provider>
  )
}

export default App
