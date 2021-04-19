import React from 'react'
import Routes from './router'
import { APIHelper } from './services/APIHelper'
import { StyledApp } from './styled.js'

const App = () => (
  <APIHelper>
    <StyledApp>
      <Routes />
    </StyledApp>
  </APIHelper>
)

export default App
