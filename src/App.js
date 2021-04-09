import React from 'react'
import GlobalState from './global/GlobalState'
import Router from './router/Router'
import styled from 'styled-components'

const ColorContainer = styled.div`
  background-color: #eee;
  margin: 0;
  height: 100vh;
`

const App = () => {
  return (
    <GlobalState>
      <ColorContainer>
        <Router />
      </ColorContainer>
    </GlobalState>
  )
}

export default App
