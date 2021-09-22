import styled from 'styled-components'

interface IButtonProps {
  disabled?: boolean
}
export const ButtonStyled = styled.button<IButtonProps>`
  color: #fff;
  display: block;

  font-size: 20px;
  margin-top: 1em;
  padding: 0.9em 0;
  text-align: center;
  letter-spacing: 0.05px;
  text-transform: uppercase;
  font-weight: bold;

  border-radius: 3px;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);

  transition: all 0.25s ease-in-out;

  pointer-events: ${({disabled = false}) => disabled ? 'none' : 'all'};
  opacity: ${({disabled = false}) => disabled ? .5 : 1};

  &:hover {
    box-shadow: none;
    background: #d45a00;
    cursor: pointer;
  }
`
