import styled from 'styled-components'

import * as C from 'constants/styles/colors'
import * as T from 'constants/styles/typography'

export const CardValuesWrapper = styled.div`
  margin-bottom: 20px;
  padding: 15px 14px;
  border: 1px solid ${C.TEXT_SECONDARY_COLOR};
  border-radius: 3px;
`
export const CardValuesItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;

  &:last-of-type {
    margin-bottom: 0px;
    margin-top: 16px;
  }
`

export const CardValuesText = styled.p`
  text-transform: uppercase;

  color: ${({ discount }) => (discount ? C.PRIMARY_COLOR : C.TEXT_PRIMARY_COLOR)};
  ${({ total }) => (total ? T.TITLE_EXTRA_LARGE : T.BODY_TEXT_LARGE)};
`
