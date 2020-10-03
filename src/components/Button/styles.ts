import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  border-radius: 3px;
  background: var(--color-orange);
  box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);
  color: var(--color-white);
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  transition: 0.5s ease;
  height: 60px;
  width: 100%;

  &:hover, &:active {
    background: var(--color-orange-dark);
  }
`;
