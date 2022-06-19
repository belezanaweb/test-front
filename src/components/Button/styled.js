import styled from 'styled-components'

export const StyledButton = styled.button`
  margin: 5px 10px;
  width: calc(100% - 20px);
  max-width: 400px;
  height: 60px;
  border: none;
  border-radius: 3px;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #d45a00;
  }
  &:disabled {
    opacity: 0.5;
  }

  @media (min-width: 400px) {
    display: block;
    margin: 5px auto;
  }

`