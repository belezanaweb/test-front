import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  width: 100%;
  max-width: 720px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CustomLink = styled(Link)`
  font-size: 1.204vw;
  color: #ccc;
  text-transform: uppercase;
`
