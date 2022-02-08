import { Typography, Grid } from '@mui/material'
import styled from 'styled-components'

export const TitleInput = styled(Typography)`
  color: #ccc !important;
  font-family: 'Helvetica Neue' !important;
  font-size: 0.813rem !important;
  font-weight: 700 !important;
  line-height: 14px !important;
  margin-bottom: 2% !important;
`

export const GridItemInput = styled(Grid)`
  margin-top: ${(props) => props.margintop} !important;
`
