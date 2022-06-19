import styled from 'styled-components'
import { colors } from '../../assets/styles/theme'

export const StyledContentTitle = styled.h2`
  max-width: 500px;
  margin-top: 15px;
  padding-left: 20px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.grey};
  text-transform: uppercase;
  @media (min-width: 520px) {
    margin: 15px auto 0 auto;
  }
`

export const StyledContentWrapper = styled.div`
  max-width: 500px;
  margin: 5px 10px 20px 10px;
  padding: 12px;
  border: 1px solid ${colors.grey};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 520px) {
    margin: 5px auto 20px auto;
  }
`

export const StyledContentWhiteWrapper = styled(StyledContentWrapper)`
  background-color: ${colors.white};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`