import styled from 'styled-components'
import px2vw from '../../../utils/px2vw'

export const Container = styled.div`
  padding: 0 ${px2vw(40)};
  text-transform: uppercase;
  font-weight: bold;
`

export const Name = styled.p`
  a {
    text-decoration: none;
    color: ${(props) => (props.selected ? '#FF7800' : '#CCC')};
  }
`
