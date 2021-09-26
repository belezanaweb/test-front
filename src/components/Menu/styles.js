import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1024px;
  background-color: #fff;
  height: 50px;
`

export const Menu = styled.ul`
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const Option = styled.li`
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ccc;
  padding: 0 20px;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      color: #ff7800;
    `}
`
