import styled from 'styled-components'
import { colors } from '../../assets/styles/colors'

export const Button = styled.button`
  display: block;
  cursor: pointer;
  height: 60px;
  width: 320px;
  border-radius: 3px;
  background-color: ${colors.button.main};
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  color: ${colors.button.text};
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  padding: 18px 0.94px;

  &:hover {
    background-color: #d45a00;
  }
`
