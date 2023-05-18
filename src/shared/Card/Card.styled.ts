import styled from 'styled-components'
import { CardProps } from './Card.types';

export const CardContainer = styled.div<CardProps>`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 15px 12px;
  ${({ centered }) => centered &&`
    text-align: center;
  `}
`;