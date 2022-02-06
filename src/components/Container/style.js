import styled from 'styled-components'
import { colors } from '../../assets/styles/colors'

export const Container = styled.section`
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 0 10px 0 9px;
`

export const Title = styled.h1`
  padding-left: 11px;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  color: ${colors.container.title};
`

export const Box = styled.div`
  margin-top: 5px;
  background-color: ${({ transparent }) =>
    transparent ? 'transparent' : colors.container.box.background};
  padding: 10px;
  padding-bottom: ${({ transparent }) => (transparent ? '20.43px' : '0px')};
  box-shadow: ${({ transparent }) => (transparent ? 'none' : '1px 1px 5px 0 rgba(0, 0, 29, 0.22)')};
  border-radius: 3px;

  display: flex;
  flex-flow: column;
  align-items: center;
`
