import { Typography, Grid } from '@mui/material'
import styled from 'styled-components'

export const ContainerSCart = styled.div`
  box-sizing: border-box !important;
  border-radius: 3px !important;
  border: 1px solid #ccc !important;
  padding: 0px 13px 13px 14px !important;
  margin: 20px 10px 20px 10px;
`

export const DescriptionSCart = styled(Typography)`
  color: ${(props) => props.colortext} !important;
  font-family: 'Helvetica Neue' !important;
  font-size: 0.875rem !important;
  line-height: 17px !important;
  ${(props) => (props.bold ? `font-weight: 700 !important;` : `font-weight: 400 !important;`)}
  ${(props) =>
    props.textAlign ? `text-align: right !important;` : `text-align: left; !important;`}
`
export const GridContainerLine = styled(Grid)`
  margin-top: ${(props) => props.margintop} !important;
`
