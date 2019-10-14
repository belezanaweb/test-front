import styled from 'styled-components'
import theme from 'theme'

export const StyledText = styled.p`
  color: #000;
  text-transform: uppercase;
  font-size: 1.077rem;
  line-height: 1.308rem;
`

export const StyledSuccess = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 39.51px;
  width: 39.51px;
  border: solid 2px ${theme.primary};
  border-radius: 50%;
  margin-bottom: 0.8462rem;
  margin-top: 0.1538rem;
`

export const StyledSuccessText = styled.p`
  color: ${theme.primary};
  font-size: 1.077rem;
  font-weight: ${theme.fontWeightBold};
  line-height: 1.308rem;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1.538rem;
`

export const StyledImage = styled.img`
  height: 15.01px;
  width: 20.54px;
`
