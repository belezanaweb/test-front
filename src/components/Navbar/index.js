import React from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'

export const NavbarItem = ({ active, children, ...props }) => (
  <S.Item active={active}>
    <Link {...props}> {children}</Link>
  </S.Item>
)

const Navbar = ({ children }) => (
  <S.Navbar>
    <ul>{children}</ul>
  </S.Navbar>
)

export default Navbar
