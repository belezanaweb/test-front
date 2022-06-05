import styled from 'styled-components'

import { Props } from './index'

export const Title = styled.h2`
  color: #999999;
  font-size: 0.9rem;
  margin: 0 0 -0.2rem 1rem;
  text-transform: uppercase;
`

export const TextComponent = styled.p<Props>`
  font-family: 'Helvetica 45 Light', sans-serif;
  font-size: 0.8rem;
  color: ${(props) => (props.type === 'discount' ? '#FF7800' : '#212122')};
  text-transform: uppercase;
  font-weight: ${(props) => (props.type === 'total' ? '800' : '500')};
`
