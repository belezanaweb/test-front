import styled from 'styled-components'

import * as C from 'constants/styles/colors'
import * as T from 'constants/styles/typography'

export const ContentTitle = styled.p`
  text-transform: uppercase;
  ${T.TITLE_EXTRA_LARGE};
  padding-left: 10px;
  color: ${C.GREY_DARK};
`
