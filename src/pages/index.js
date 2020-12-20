import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {
  const data = useSelector((e) => e.data)
  return <h1>Bag {JSON.stringify(data)}</h1>
}

export default App
