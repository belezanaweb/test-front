import styled from 'styled-components/macro'

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 0.3rem;
  box-shadow: inset 0 -0.3rem 0 0 ${({ theme }) => theme.colors.primaryDark},
    0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.baseLight};
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.05rem;
  line-height: 2.4rem;
  margin: auto;
  padding: 1.8rem 0;
  transition: background-color 0.3s ease;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.base};
    box-shadow: none;
    cursor: not-allowed;
  }
`
