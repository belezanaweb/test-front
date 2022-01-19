import styled from 'styled-components'

/* itens da navbar */
export const NavbarItem = styled.li`
  margin: 0 20px;
  height: 16px;
  width: 61px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ $step }) => ($step ? `#FF7800` : `#CCC`)};

  &:last-of-type {
    margin-right: 0px;
    margin-left: 35px;
  }
`
/* conjunto de itens da navbar */
export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 40px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

/* navbar */
export const Navbar = styled.header`
  width: 99vw;
  margin-bottom: 12px;
`