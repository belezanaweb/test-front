import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  min-height: 100%;
}
body {
  font-family: 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#root {
  width: 100%;
  height: 100%;
  main {
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    @media (min-width: 1024px) {
      display: flex;
      max-width: 1120px;
      justify-content: space-between;
    }
  }
}
.skeleton {
  @keyframes load {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(200%);
    }
  }
  .stripe {
    background-color: #aeb2b5;
    height: 20px;
    width: 130px;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    will-change: transform;
    &:after {
      content: "";
      height: 100%;
      width: 100%;
      display: block;
      background: linear-gradient(
        to right,
        rgba(230, 230, 230, 0) 0%,
        rgba(230, 230, 230, 0.4) 42%,
        rgba(230, 230, 230, 0.4) 62%,
        rgba(230, 230, 230, 0) 100%
      );
      animation: load 1.2s ease-out infinite;
    }
  }
}
`

export default GlobalStyle
