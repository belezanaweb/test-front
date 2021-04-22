import React from 'react'
import { ReactComponent as CheckMark } from '../../assets/check-mark.svg'
import { Container } from './styles'
import theme from '../../styles/theme'
import { Text } from '../Text'

export const Alert = ({ message }) => (
  <Container>
    <CheckMark fill={theme.mainColor} width="50" height="50" />
    <Text type="cartPriceDiscount">{message}</Text>
  </Container>
)
