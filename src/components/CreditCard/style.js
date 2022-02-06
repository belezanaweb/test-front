import styled from 'styled-components'
import { colors } from '../../assets/styles/colors'

export const Row = styled.div`
  display: flex;
  margin-bottom: 25px;
  gap: 20px;

  width: 100%;
`

export const P = styled.p`
  font-size: 14px;
  text-align: left;
  text-transform: uppercase;
  line-height: 17px;
  width: 100%;
  color: ${colors.creditCardInfo.text};} 
`
