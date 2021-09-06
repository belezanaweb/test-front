import styled from 'styled-components'

export const StyledButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: var(--content);
  background-color: var(--primary);

  height: 60px;
  width: 100%;
  border: none;
  border-radius: 3px;
  transition: 0.3s;

  &:hover {
    background-color: var(--secondary);
  }
`
