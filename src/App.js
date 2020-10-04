import React from 'react'
import { AppWrapper, GlobalStyle } from './AppStyle'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Bag from './pages/Bag'
import Payment from './pages/Payment'
import Confirmation from './pages/Confirmation'
import { useRequestData } from './hooks/useRequestData'
import ProductsContext from './contexts/ProductsContext'
import CardDetailsContext from './contexts/CardDetails'
import { useForm } from './hooks/useForm'

const App = () => {
  const data = useRequestData()
  const { form, onChange } = useForm({
    cardNumber: "",
    cardholderName: "",
    expiringDate: "",
    cvv: ""
  })
  const handleInputChange = e => {
    const { value, name } = e.target
    const newValue = value.replace("/", "-")
    onChange(name, newValue)
  }
  const formInformation = { form, handleInputChange }

  return (
    <ProductsContext.Provider value={data}>
      <CardDetailsContext.Provider value={formInformation}>
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
      </CardDetailsContext.Provider>
    </ProductsContext.Provider>
  )
}

export default App
