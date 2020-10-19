import React from 'react'

// Global Sass
import './assets/sass/_resets.scss'
import './assets/sass/_font.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// Commons
import Steps from './commons/Steps'

//Screens
import Sacola from './screens/Sacola'

const App = () => (

    <Router>

      <Steps />

      <Switch>
        <Route path="/"> <Sacola /></Route>
      </Switch>

    </Router>

)

export default App
