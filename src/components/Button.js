import styled from 'styled-components'

const Button = styled.button`
  background-color: var(--primary);
  border: none;
  border-radius: var(--border-radius);
  box-shadow: inset 0 -3px 0 0 var(--primary-darken), 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  color: var(--primary-contrast);
  cursor: pointer;
  font-size: var(--font-lg);
  font-weight: 700;
  letter-spacing: 0.5px;
  outline: none;
  padding: var(--spacing-lg);
  text-align: center;
  text-transform: uppercase;
  transition: var(--transition) background-color;
  width: 100%;
  will-change: background-color;

  &:hover {
    background-color: var(--primary-darken);
  }
`

export default Button
