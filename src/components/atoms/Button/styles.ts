import styled from 'styled-components'

import { Props } from './index'

export const ButtonContent = styled.button<Props>`
  margin: 0.5rem;
  width: 95%;
  background-color: #ff6c00;
  outline: none;
  border: 0;
  padding: 0.75rem;
  color: #fafafa;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 3px;
  opacity: ${(props) => (props.active ? `1` : `.5`)};
`
