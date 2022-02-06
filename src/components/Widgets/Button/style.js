import styled from 'styled-components'
import Button from '@mui/material/Button'

export const CustomButton = styled(Button)`
  height: 167%;
  width: 95%;
  border-radius: 3px !important;
  background-color: #ff6c00 !important;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25) !important;
  color: #fff !important;
  font-family: 'Helvetica Neue' !important;
  font-size: 20px !important;
  font-weight: 700 !important;
  letter-spacing: 0.5px !important;
  line-height: 24px !important;
  text-align: center !important;

  &:hover {
    background-color: #d45a00 !important;
  }
`
