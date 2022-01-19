import styled from 'styled-components'

/* botões */
export const Button = styled.button`
  display: block;
  cursor: pointer;
  height: 60px;
  width: 341px;
  border-radius: 3px;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);

  color: #fff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
  transition: all 0.5s ease;
  text-transform: uppercase;
  padding: 18px 0px;

  &:hover {
    background-color: #d45a00;
  }

  &:disabled {
    opacity: 0.5;
  }

  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`
