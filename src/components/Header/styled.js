import styled from 'styled-components'
import { colors, fonts } from './assets/styled/tokens'

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  height: 8vh;
  border-radius: 3px;
  background-color: ${colors.white};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

export const StyledOrangeText = styled.p`
  color: ${colors.orangeText};
  font-family: ${fonts.text};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 16px;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`

export const StyledTextDisable = styled.p`
  color: ${colors.silverTextDisable};
  font-family: ${fonts.text};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 16px;
  text-align: center;
  padding-right: 10px;
  :hover {
    cursor: pointer;
  }
`
