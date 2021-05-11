import styled from 'styled-components'

import colors from '../../utils/colors'

export const CustomButton = styled.button`
  height: 60px;
  width: 100%;

  border-radius: 3px;
  background-color: ${colors.button};
  border: none;
  box-shadow: inset 0 -3px 0 0 ${colors.buttonRover}, 0 2px 4px 0 rgba(0, 0, 0, 0.25);

  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
  color: ${colors.white};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${colors.buttonRover};
  }

  &:focus {
    outline: none;
  }
`
