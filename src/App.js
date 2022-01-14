import React from 'react'
import './App.css'
import { DataProvider } from './context/Context'
import MyRouter from './route/MyRouter'

const App = () => (
  <div className="App">
    <DataProvider>
      <MyRouter />
    </DataProvider>
  </div>
)

export default App
