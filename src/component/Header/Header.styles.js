import styled from 'styled-components'

export const Header = styled.header`
  height: 40px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

export const Ul = styled.ul`
  display: flex;
  padding: 12px 10px;
`
export const Li = styled.li`
  flex: 1;
  font-size: 13px;
  text-align: center;
  font-weight: bold;
  color: ${({ active }) => (active ? '#FF7800' : '#ccc')};
`
