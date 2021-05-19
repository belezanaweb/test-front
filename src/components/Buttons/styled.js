import styled from 'styled-components'

import * as C from 'constants/styles/colors'

export const Button = styled.button`
  display: block;
  width: 100%;
  color: ${C.WHITE};
  background-color: ${C.PRIMARY_COLOR};
  padding: 18px;
  text-align: center;
  transition: all 0.4s ease;
  font-size: ${T.BODY_TEXT_EXTRA_LARGE};
  text-transform: uppercase;

  &:hover {
    background-color: ${C.PRIMARY_COLOR_DARK};
  }
`
