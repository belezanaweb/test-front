import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;

  background-color: var(--orange);
  color: var(--white);

  padding: 1.12rem;
  border: none;

  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;

  box-shadow: inset 0 -3px 0 0 var(--orange), 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  transition: 0.2s;
  margin-top: 1.25rem;
  cursor: pointer;

  &:disabled {
    background-color: var(--grey-border);
    box-shadow: inset 0 -3px 0 0 var(--grey-border), 0 2px 4px 0 rgba(0, 0, 0, 0.25);

    &:hover {
      background-color: var(--grey-border);
      box-shadow: inset 0 -3px 0 0 var(--grey-border), 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    }
  }

  &:hover {
    background-color: var(--orange-100);
  }
`
