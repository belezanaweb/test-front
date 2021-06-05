import styled from 'styled-components'
import { NavLink as RouterNavLink } from 'react-router-dom'

export const Wrapper = styled.header`
  width: 100%;
  background: white;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  max-width: 360px;
  height: 36px;
  display: flex;
  padding: 0 20px;
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 38px;
`

export const NavLink = styled(RouterNavLink)`
  color: ${({ theme }) => theme.colors.header.link};
  font-family: ${({ theme }) => theme.font.family};
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  transition: 300ms color ease;

  &:hover {
    color: ${({ theme }) => theme.colors.button.hover};
  }
`
