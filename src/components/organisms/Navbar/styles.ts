import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #fafafa;
  box-shadow: 0px 2px 7px #d9d9d9;

  .navLinks {
    max-width: 753px;
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media (min-width: 767px) {
      justify-content: space-between;
    }
  }
`
