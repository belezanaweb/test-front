import React from 'react'

// Global Sass
import './assets/sass/_resets.scss'
import './assets/sass/_grid.scss'
import './assets/sass/_font.scss'
import './assets/sass/_forms.scss'
import './assets/sass/_buttons.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// Commons
import Steps from './commons/Steps'

//Screens
import Sacola from './screens/Sacola'
import Pagamento from './screens/Pagamento'
import Confirmacao from './screens/Confirmacao'

const App = () => (

    <Router>

      <Steps />

      <Switch>

        <Route path="/confirmacao">
          <Confirmacao />
        </Route>

        <Route path="/pagamento">
          <Pagamento />
        </Route>

        <Route path="/">
          <Sacola />
        </Route>

      </Switch>

    </Router>

)

export default App
