import styled from 'styled-components'
import { colors } from '../../assets/styles/theme'

export const StyledProductCardTextPrice = styled.h3`
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  text-align: right;
`

export const StyledProductCardTextName = styled.h3`
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  margin-bottom: 15px;
`

export const StyledProductCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
  color: ${colors['font-color']};
`

export const StyledProductCardImage = styled.img`
  margin-right: 10px;
  width: ${({ hideDetails }) => (hideDetails ? '45px' : '65px')};
  height: ${({ hideDetails }) => (hideDetails ? '45px' : '65px')};
`

export const StyledProductCardWrapper = styled.div`
  display: flex;
  padding: 12px 10px;
  border-radius: 3px;
  border: 1px solid ${colors.background};
`
