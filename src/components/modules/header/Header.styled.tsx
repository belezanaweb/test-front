import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100;
  height: 4.5rem;

  background-color: ${({ theme }) => theme.color.background.header.primary};

  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

export const StyledHeaderNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const StyledHeaderNavItem =
  styled.span <
  { active: boolean } >
  `
  color: ${({ theme, active }) =>
    active ? theme.color.text.header.active : theme.color.text.header.primary};
  font-weight: 700;
  line-height: 1rem;
  text-transform: uppercase;
  text-decoration: none;
`
