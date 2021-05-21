import styled from 'styled-components'

import * as C from 'constants/styles/colors'
import * as T from 'constants/styles/typography'

export const Button = styled.button`
  display: block;
  width: 100%;
  color: ${C.WHITE};
  background-color: ${C.PRIMARY_COLOR};
  padding: 18px 0px;
  text-align: center;
  transition: all 0.4s ease;
  ${T.BUTTON_TEXT_EXTRA_LARGE};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border-radius: 3px;
  box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.25);
  box-shadow: inset 0px -3px 0px ${C.PRIMARY_COLOR_DARK};
  cursor: pointer;

  &:hover {
    background-color: ${C.PRIMARY_COLOR_DARK};
  }
`
