
import styled from '@emotion/styled'

const Button = styled.a`
  display: block;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: inset 0 -3px 0 0 ${({ theme }) => theme.colors.secondary}, 0 2px 4px 0 rgba(0,0,0,0.25);
  padding: 1rem 0.875rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: #FFF;
  text-transform: uppercase;
  text-align: center;
  outline: none;
  margin-top: 1.25rem 0.875rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &[disabled] {
   pointer-events: none;
   cursor: default;
  }
`

export default Button
