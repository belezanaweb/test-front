import styled from 'styled-components'
import { colors } from '../../assets/styles/colors'

export const Container = styled.main`
  margin-top: 10px;
`

export const Title = styled.h1`
  padding-left: 20px;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  color: ${colors.container.title};
`

export const Box = styled.div`
  padding-left: 20px;
  margin-top: 5px;
  border: 1px solid red;
  background-color: ${colors.container.box.background};
`
