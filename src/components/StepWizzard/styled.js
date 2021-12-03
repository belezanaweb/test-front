import styled from 'styled-components'
import theme from 'theme'

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 45px;
  background-color: #fff;
  padding: 0px 10px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  margin-bottom: 10px;
`

export const HeaderItem = styled.div`
  color: ${(props) => (props.selected ? theme.colors.primary[0] : '#ccc')};
  padding: 13px;
  text-transform: uppercase;
  font-weight: bold;
`
