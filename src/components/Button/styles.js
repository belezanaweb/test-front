import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: block;
  width: 100%;
  margin-top: 20px;
  height: 60px;
  cursor: pointer;
  background-color: #ff6c00;
  border: none;
  border-radius: 3px;

  box-shadow: inset 0 -3px 0 0 #d45b00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  font-weight: bold;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 24px;
  color: #fff;

  &:hover {
    box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: #d45b00;
  }
`
