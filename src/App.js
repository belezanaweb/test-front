import React, { Component } from 'react';
// import logo from './logo.svg';
import styled from 'styled-components'

const AppContainer = styled.div`
  text-align: center;
`
const AppHeader = styled.header`
  background-color: ${props => props.backgroundColor || "#282c34"};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

class App extends Component {
  render() {
    return (
      <AppContainer className="App">
        <AppHeader className="App-header" backgroundColor="#6b2477">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          teste front
        </AppHeader>
      </AppContainer>
    );
  }
}

export default App;
