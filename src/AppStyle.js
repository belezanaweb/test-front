import styled, { createGlobalStyle } from 'styled-components'

export const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #EEE;
`

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  }
`

export const Content = styled.div`
  display: grid;
  align-content: flex-start;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  flex-grow: 1;
`