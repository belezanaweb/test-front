import styled from 'styled-components'

import * as T from 'constants/styles/typography'
import * as C from 'constants/styles/colors'

export const Header = styled.header`
  width: 100%;
  margin-bottom: 10px;
`

export const HeaderList = styled.ul`
  padding: 12px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${C.WHITE};
  box-shadow: 1px 1px 5px rgba(0, 0, 29, 0.22);
`

export const HeaderItem = styled.li`
  ${T.TITLE_LARGE}
  text-transform: uppercase;
  margin-right: 38px;
  color: ${({ $step }) => ($step ? C.PRIMARY_COLOR : C.TEXT_SECONDARY_COLOR)};

  &:last-of-type {
    margin-right: 0px;
  }
`
