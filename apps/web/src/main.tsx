import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './presentation/App'

import '../src/core/ui/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
