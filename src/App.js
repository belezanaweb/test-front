import React from 'react'
import CRouter from './routes'
import { TransactionProvider } from './core/store/Context'

const App = () => (
  <div className="App">
    <TransactionProvider>
      <CRouter />
    </TransactionProvider>
  </div>
)

export default App
