import styled from 'styled-components'

import * as C from 'constants/styles/colors'

export const Loader = styled.div`
  cursor: wait;
  width: 30px;
  height: 30px;
  border: solid 3px transparent;
  border-left-color: ${C.PRIMARY_COLOR};
  border-right-color: ${C.PRIMARY_COLOR};
  border-top-color: ${C.PRIMARY_COLOR};
  animation: rotating 0.5s 0.25s linear infinite;
  border-radius: 50%;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @keyframes rotating {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
