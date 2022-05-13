import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CustomThemeProvider } from './hooks/useTheme'
import * as serviceWorker from './serviceWorker'

const Strict = () => (
  <StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </StrictMode>
)

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()
