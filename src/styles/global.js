﻿import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

#root{
    @media(min-width:800px) {
        display: flex;
        flex-direction: column;
        align-items:center;
    }
}

body {
    background: #EEE;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}
`
