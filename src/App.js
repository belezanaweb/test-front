import React, { StrictMode } from 'react'
import { createUseStyles } from 'react-jss'
import { createRoutes } from './routes'
import { CartContextProvider } from './components/Context/Context'
import { FormContextProvider } from './components/Context/FormContext'

const useStyles = createUseStyles({
  app: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#E7E7E7',
    minHeight: '100vh'
  }
})

const App = () => {
  const classes = useStyles()
  const routes = createRoutes()

  return (
    <StrictMode>
      <div className={classes.app} data-testid="App">
        <CartContextProvider>
          <FormContextProvider>{routes}</FormContextProvider>
        </CartContextProvider>
      </div>
    </StrictMode>
  )
}

export default App
