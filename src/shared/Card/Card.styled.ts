import styled from 'styled-components'
import { StyledCardProps } from './Card.types'

export const CardContainer =
  styled.div <
  StyledCardProps >
  `
  background: #fff;
  border: 1px solid ${(props) => props.theme.colors.gray[100]};
  border-radius: 4px;
  padding: 15px 12px;
  
  ${({ $centered }) =>
    $centered &&
    `
    text-align: center;
  `}
`
