import styled from 'styled-components'
import Button from '@mui/material/Button'

export const Button = styled(Button)`
  height: 60px;
  width: 320px;
  border-radius: 3px;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  color: #fff;
  font-family: 'Helvetica Neue';
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;

  &:hover {
    background-color: #d45a00;
  }
`
