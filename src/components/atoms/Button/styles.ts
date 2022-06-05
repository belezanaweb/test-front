import styled from 'styled-components'

import { Props } from './index'

export const ButtonContent = styled.button<Props>`
  margin: 0.5rem;
  width: 95%;
  background-color: #ff6c00;
  outline: none;
  border: 0;
  padding: 1rem 0.75rem;
  color: #fafafa;
  font-size: 1.1rem;
  text-transform: uppercase;
  border-radius: 3px;
  letter-spacing: 1px;
  box-shadow: 0px 2.5px 0px #d45a00;
  cursor: pointer;

  @media (min-width: 375px) {
    width: 96%;
  }

  @media (min-width: 500px) {
    width: 97%;
  }

  @media (min-width: 767px) {
    max-width: 769px;
    width: 98%;
  }
`
