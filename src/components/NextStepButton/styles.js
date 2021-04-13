import styled from 'styled-components'

export const StyledButton = styled.button`
  cursor: pointer;
  width: 320px;
  height: 60px;
  background-color: #ff6c00;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  letter-spacing: 0.5px;
  line-height: 24px;
  padding: 18px 0.94px 18px 0.94px;
  border: 0px;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25), inset 0 -3px 0 0 #d45a00;
  &:hover {
    background-color: #d45a00;
    border-color: #d45a00;
    color: #fff;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`
