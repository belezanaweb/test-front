import styled from 'styled-components'
import { colors, fonts } from '../../assets/styled/tokens'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  background-color: ${colors.grayBackground};
`

export const StyledImg = styled.img`
  width: 105px;
  height: 98px;
  display: flex;
  align-content: center;
`

export const StyledError = styled.div`
  font-family: ${fonts.text};
  font-weight: 800;
  font-size: 18px;
  font-style: normal;
  line-height: 21.94px;
  color: ${colors.tangerine};
`

export const StyledErrorMessage = styled.div`
  margin-top: 25px;
  font-family: ${fonts.text};
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  line-height: 29.26px;
  text-align: center;
  color: ${colors.tundora};
`

export const StyledErrorMessageSub = styled.div`
  width: 325px;
  margin-top: 7px;
  margin-bottom: 46px;
  font-family: ${fonts.text};
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  line-height: 21.09px;
  text-align: center;
  color: ${colors.gray};

  @media screen and (min-width: 768px) {
    width: 525px;
  }
`
