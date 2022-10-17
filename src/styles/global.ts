import { createGlobalStyle, css } from 'styled-components'

const globalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: Helvetica-Neue, HelveticaNeue, Helvetica, Arial, 'Lucida Grande', sans-serif;
    }

    html,
    body {
      height: 100%;
      background-color: #eee;
    }

    button {
      background-color: transparent;
      border: none;
      outline: none;
    }

    a {
      text-decoration: none;
      outline: none;
    }
  `

export default globalStyle
