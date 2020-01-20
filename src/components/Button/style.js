import styled from 'styled-components'
import { colors } from '../../styles'
export const ButtonStyle = styled.button`
  display: block;
  padding: 23px 15px;
  text-align: center;
  width: 100%;
  background: ${colors.primary};
  margin-top: 21px;
  border-radius: 6px;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  font-size: 1.3rem;
  letter-spacing: 1px;
  cursor: pointer;
  border-bottom: 5px solid #d45a00;
  box-shadow: 0px 0px 9px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #d45a00;
  }
`
