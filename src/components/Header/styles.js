import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderStyle = styled.header`
  background-color: #fff;
  padding: 7px;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.15);
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
    a {
      padding: 10px;
      font-size: 0.8rem;
      display: block;
      text-decoration: none;
      color: ${colors.grey};
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.7px;
    }

    .active,
    a:hover {
      color: ${colors.primary};
    }
  }
`
