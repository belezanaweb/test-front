import styled from 'styled-components'
import * as vars from '../../style/config'

export const Container = styled.button`
  width: 100%;
  padding: 18px;
  font-size: ${vars.rem(20)};
  font-weight: 700;
  text-transform: uppercase;
  line-height: ${vars.rem(24)};
  letter-spacing: ${vars.rem(0.5)};
  color: #fff;
  background-color: ${props => (props.disabled ? '#d45a00' : '#ff6c00')};
  border: none;
  border-radius: 4px;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s linear;
  &:hover {
    background-color: #d45a00;
  }
  &:focus {
    outline: none;
  }
`