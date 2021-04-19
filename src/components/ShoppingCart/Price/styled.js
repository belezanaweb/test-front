import styled from 'styled-components'
import { colors, fonts } from '../../../assets/styled/tokens'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  /* height: 20vh; */
  width: 89vw;
  border-radius: 3px;
  border: 1px solid ${colors.silverTextDisable};
  margin-bottom: 4vw;
  padding: 3%;
`

export const Text = styled.p`
  color: ${colors.blackText};
  font-family: ${fonts.text};
  font-size: 14px;
  line-height: 17px;
`

export const TextDiscount = styled.p`
  color: ${colors.orangeText};
  font-family: ${fonts.text};
  font-size: 14px;
  line-height: 17px;
`

export const TextTotal = styled.p`
  color: ${colors.blackText};
  font-family: ${fonts.text};
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`
