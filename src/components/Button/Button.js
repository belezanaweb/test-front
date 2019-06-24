import styled from '@emotion/styled/macro'

const Button = styled.button`
  align-self: flex-start;
  background-color: #ff6c00;
  border: 0;
  border-radius: 3px;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  padding: 18px 24px;
  transition: all 0.5s linear;
  text-align: center;
  text-transform: uppercase;
  width: 100%;

  &.hover,
  &:hover,
  &:active {
    background-color: #d45a00;
    box-shadow: inset 0 0 0 0 #d45a00, 0 0 0 0 rgba(0, 0, 0, 0.25);
  }

  &:disabled {
    background-color: #888;
    box-shadow: inset 0 -3px 0 0 #666, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    color: #ccc;
    cursor: not-allowed;
  }
`

export default Button
