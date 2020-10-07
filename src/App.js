import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'

import Navigation from './components/Navigation/Navigation'

import Basket from './pages/Basket/Basket'
import Confirmation from './pages/Confirmation/Confirmation'
import Payment from './pages/Payment/Payment'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`
const StyledPage = styled.div`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: #eee;
  min-height: 100vh;
`

const App = () => (
  <>
    <GlobalStyles />
    <StyledPage>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Basket />
          </Route>
          <Route path="/pagamento">
            <Payment />
          </Route>
          <Route path="/confirmacao">
            <Confirmation />
          </Route>
        </Switch>
      </Router>
    </StyledPage>
  </>
)

export default App
