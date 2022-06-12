import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  width: 100%;
  max-width: 720px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 720px) {
    a {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1024px) {
    a {
      font-size: 1.3rem;
    }
  }
`
export const CustomLink = styled(Link)`
  font-size: 0.81rem;
  color: #ccc;
  text-transform: uppercase;
  text-decoration: none;
`
