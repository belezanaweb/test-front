import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  background:  #eee;
}

body,
input,
button {
  font-family: Roboto, sans-serif;
}

#root {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 50px;
}

button {
  cursor: pointer;
}
`
