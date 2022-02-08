import { Typography, Grid } from '@mui/material'
import styled from 'styled-components'

export const StepsContainer = styled(Grid)`
  height: 5% !important;
  background-color: #ffff;
  position: absolute;
  top: 0;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

export const TitleSteps = styled(Typography)`
  color: ${(props) => (props.colorsteps ? `#FF7800` : `#CCC`)};
  font-family: 'Helvetica Neue' !important;
  font-size: 0.8125rem !important;
  font-weight: 700 !important;
  line-height: 16px !important;
  text-align: center !important;
`
