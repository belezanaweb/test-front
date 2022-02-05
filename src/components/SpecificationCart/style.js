import { Typography } from '@mui/material'
import styled from 'styled-components'

export const ContainerSCart = styled.div`
  height: 129px;
  width: 341px;
`

export const DescriptionSCart = styled(Typography)`
  height: 17px;
  width: 124px;
  color: ${(props) => props.ColorText};
  font-family: 'Helvetica Neue';
  font-size: 14px;
  line-height: 17px;
  ${(props) => props.textAlign && `text-align: right;`}
  ${(props) => props.bold && `font-weight: 700;`}
`
