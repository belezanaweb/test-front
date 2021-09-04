import styled from 'styled-components'

export const StyledButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: var(--content);
  background-color: var(--secondary);

  height: 60px;
  width: 100%;
  border: none;
  border-radius: 3px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
