import styled from 'styled-components'

import colors from '../../utils/colors'

export const Container = styled.div`
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid ${colors.veryLightGrey};
  padding: 15px 13px 13px 14px;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
`

export const InfoTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`

export const Text = styled.div`
  font-size: 14px;
  color: ${(props) => (props.discount ? colors.primary : colors.black)};
  font-weight: ${(props) => (props.total ? 700 : 'regular')};
`
