import { Typography } from '@mui/material'
import styled from 'styled-components'

export const ContainerProducts = styled.div`
  height: 325px;
  width: 341px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

export const BoxProduct = styled.div`
  box-sizing: border-box;
  height: 90px;
  width: 316px;
  border-radius: 3px;
  border: 1px solid #eee;
`

export const TitleProduct = styled(Typography)`
  height: 32px;
  width: 220px;
  color: #212122;
  font-family: 'Helvetica Neue';
  font-size: 13px;
  letter-spacing: NaNpx;
  line-height: 16px;
`
export const PriceProduct = styled(Typography)`
  height: 17px;
  width: 220px;
  color: #212122;
  font-family: 'Helvetica Neue';
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: right;
`
export const ImageProduct = styled.img`
  height: 65px;
  width: 65px;
  background: url(${(props) => props.imgProduct});
`
