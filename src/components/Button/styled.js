import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, fonts } from '../../assets/styled/tokens'

export const StyledButton = styled.button`
  cursor: pointer;
  width: 320px;
  height: 60px;
  background-color: ${colors.orange};
  color: ${colors.white};
  font-size: 20px;
  font-weight: bold;
  font-family: ${fonts.text};
  letter-spacing: 0.5px;
  line-height: 24px;
  padding: 18px 0.94px 18px 0.94px;
  border: 0px;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25), inset 0 -3px 0 0 ${colors.orangeHovered};
  &:hover {
    background-color: ${colors.orangeHovered};
    border-color: ${colors.orangeHovered};
    color: ${colors.white};
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
`
