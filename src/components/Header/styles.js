import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 0.75rem 0;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  background-color: var(--white);

  @media (min-width: 960px) {
    padding: 1.5rem 0;
  }

  a {
    font-size: 0.81rem;
    text-transform: uppercase;
    font-weight: bold;

    text-decoration: none;

    color: var(--grey-text);

    &.active {
      color: var(--orange);
    }
  }
`
