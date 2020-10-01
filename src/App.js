import React from 'react'
import { AppWrapper, Content, GlobalStyle } from './AppStyle'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Bag from './pages/Bag'
import Payment from './pages/Payment'
import Confirmation from './pages/Confirmation'

const App = () => (
  <Router>
    <GlobalStyle />
    <AppWrapper>
      <Content>
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
      </Content>
    </AppWrapper>
  </Router>
)

export default App
