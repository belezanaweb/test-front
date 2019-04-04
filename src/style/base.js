import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: #212122;
    margin: 0;

    background-color: #eee;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0;
  }
`

export const Container = styled.div`
  @media (min-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`

export const Wrapper = styled.div`
  @media (min-width: 960px) {
    width: 960px;
  }
`

