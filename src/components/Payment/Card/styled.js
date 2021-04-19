import styled from 'styled-components'
import { colors } from '../../../assets/styled/tokens'

export const Container = styled.div`
  height: 73px;
  width: 100%;
  border-radius: 3px;
  background-color: ${colors.white};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  padding: 5px;

  @media screen and (max-device-width: 376px) {
    width: 340px;
  }
`

export const Text = styled.p`
  color: ${colors.black};
  font-size: 16px;
  line-height: 17px;
  margin: 0;
  padding-left: 0.5em;
  &:first-child {
    padding-top: 0.5em;
  }
`
