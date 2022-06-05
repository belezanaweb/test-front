import styled from 'styled-components'

import { Props } from './index'

export const PriceComponent = styled.span<Props>`
  font-family: 'Helvetica 45 Light', sans-serif;
  display: flex;
  justify-content: end;
  margin: ${(props) => (props.product ? `1.25rem 0 -.5rem 0` : `0`)};
  color: ${(props) => (props.type === 'discount' ? '#FF7800' : '#212122')};
  font-weight: ${(props) => (props.type === 'total' ? '700' : '500')};
`
