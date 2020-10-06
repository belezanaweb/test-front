import styled from 'styled-components'

export const LoadindStyled = styled.div<{ show: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999999999;
  position: fixed;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  .loading-logo {
    animation: logo-spin infinite 20s linear;
    -webkit-animation: logo-spin infinite 20s linear;
    -moz-animation: logo-spin infinite 20s linear;
    -ms-animation: logo-spin infinite 20s linear;
    width: 150px;
    pointer-events: none;
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
    }
  }
`
