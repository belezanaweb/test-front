import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { globalCss } from '@/style/stitches.config'

import Cart from '@/pages/Cart'
import Payment from '@/pages/Payment'
import Success from '@/pages/Success'

import Container from '@/components/Container'
import StepBar from './components/StepBar'

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }
})

const Main = (): React.ReactElement => {
  globalStyles()

  return (
    <Container>
      <StepBar />
      <StrictMode>
        <BrowserRouter>
          <Switch>
            <Route path="/cart" exact component={Cart} />
            <Route path="/payment" exact component={Payment} />
            <Route path="/success" exact component={Success} />
            <Route exact path="/">
              <Redirect to="/cart" />
            </Route>
          </Switch>
        </BrowserRouter>
      </StrictMode>
    </Container>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
