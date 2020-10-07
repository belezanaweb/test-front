import React from 'react'
import logo from '../../logo.svg'
import './HomePage.css'
import { useHistory } from 'react-router-dom'

function HomePage() {
  const history = useHistory()

  const goToBag = () => {
    history.push('/bag')
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <button onClick={goToBag}>Sacola</button>
    </div>
  )
}

export default HomePage
