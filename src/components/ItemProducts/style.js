import { Typography } from '@mui/material'
import styled from 'styled-components'

export const BoxProduct = styled.div`
  height: 25%;
  box-sizing: border-box !important;
  border-radius: 3px !important;
  border: 2px solid #eee !important;
  padding: 12px 12px 13px 13px !important;
  margin: 15px 12px 0px 12px;
`

export const TitleProduct = styled(Typography)`
  color: #212122 !important;
  font-family: 'Helvetica Neue' !important;
  font-size: 0.8125rem !important;
  line-height: 16px !important;
`
export const PriceProduct = styled(Typography)`
  color: #212122 !important;
  font-family: 'Helvetica Neue' !important;
  font-size: 0.875rem !important;
  font-weight: 700 !important;
  line-height: 17px !important;
  text-align: right !important;
`
export const ImageProduct = styled.div`
  height: 65px !important;
  width: 65px !important;
  background: url(${(props) => props.imgProduct}) no-repeat !important;
  background-size: contain !important;
  border: 10px solid transparent !important;
`
