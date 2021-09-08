import styled from 'styled-components'
import { animeLeft } from '../../styles/global'

export const StyledButton = styled.button`
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--content);
  background-color: var(--primary);

  height: 60px;
  width: 100%;
  margin-bottom: 1rem;
  border: none;
  border-radius: var(--border-radius);
  opacity: 0;
  transition: 0.3s;
  transform: translateX(-20px);
  animation: ${animeLeft} 0.3s forwards;

  &:hover {
    background-color: var(--secondary);
  }
`
