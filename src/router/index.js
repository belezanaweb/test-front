import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Kart from '../pages/Kart'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Kart} unauthenticated />
    </Switch>
  )
}

export default App
