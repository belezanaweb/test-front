import styled from 'styled-components'

import Paper from '../Paper'

export const Item = styled.li`
  font-weight: 700;

  a {
    color: ${(p) => (p.active ? 'var(--primary)' : 'var(--text)-secondary')};
    text-decoration: none;
  }
`

export const Navbar = styled(Paper).attrs({ as: 'nav' })`
  padding: var(--spacing) var(--spacing-lg);
  position: sticky;
  text-transform: uppercase;
  top: 0;

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`
