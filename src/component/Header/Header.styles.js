import styled from 'styled-components'

export const Header = styled.header`
  min-height: 40px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

export const Ul = styled.ul`
  max-width: 360px;
  margin: auto;

  li:nth-child(1) {
    margin-left: 10px;
  }
  li:nth-child(2) {
    margin-left: 38px;
    margin-right: 38px;
  }
`
export const ContainerList = styled.div`
  padding: 12px 10px;
`

export const Li = styled.li`
  display: inline-block;
  font-size: 13px;
  text-align: center;
  font-weight: bold;
  color: ${({ active }) => (active ? '#FF7800' : '#ccc')};
`
