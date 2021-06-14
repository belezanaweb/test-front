import styled from 'styled-components'

export const Button = styled.button`
  height: 60px;
  width: 100%;
  border: none;
  color: var(--colors-white);
  font-weight: bold;
  border-radius: var(--border-radius-md);
  box-shadow: inset 0 -3px 0 0 var(--colors-orange-400), 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: var(--colors-orange-300);
  cursor: pointer;
  font-size: var(--font-size-lg);

  &:hover {
    background-color: var(--colors-orange-400);
  }
`
