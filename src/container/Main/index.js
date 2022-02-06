import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../../routes'
import { MainContainer } from './style.js'

const Main = () => {
  return (
    <>
      <Router>
        <MainContainer>
          <Routes />
        </MainContainer>
      </Router>
    </>
  )
}

export default Main
