import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  height: 72px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

export const List = styled.ul`
  display: flex;
  height: 72px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`
export const ListItem = styled.li`
  height: 16px;
  font-size: 13px;
  color: ${({ active }) => (active ? '#FF7800' : '#CCC')};
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 16px;
`
