import styled from 'styled-components'

export const ButtonStyled = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 1.25rem;
  line-height: 1.5rem;
  letter-spacing: 0.5px;
  text-align: center;
  width: 100%;
  height: 3.75rem;
  color: #fff;
  border-radius: 3px;
  background-color: #ff6c00;
  box-shadow: 0 3px 0 #d45a00, 0 2px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: #d45a00;
  }
`
