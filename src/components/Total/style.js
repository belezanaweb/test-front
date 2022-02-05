import styled from 'styled-components'
import { colors } from '../../assets/styles/colors'

export const Box = styled.ul`
  background-color: transparent;
  border: 1px solid ${colors.total.border};
  width: 100%;
  margin-bottom: 20px;
  padding: 15px 13px 13px 14px;

  &:first-of-type {
    paddin-bottom: 9px;
  }
`

export const Row = styled.li`
  color: ${(props) => (props.discount ? colors.total.text.discount : colors.total.text.normal)};
  font-size: 14px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  padding-top: ${(props) => (props.total ? '16px' : '')};
  padding-bottom: 8px;

  &:first-of-type {
    padding-bottom: 9px;
  }

  &:last-of-type {
    padding-bottom: 0;
  }
`
