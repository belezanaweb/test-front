import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: ${props => (props.isBold ? '700' : '400')};
  color: ${props => (props.isHighlight ? '#ff7800' : '#212122')};
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:last-child {
    margin-top: 16px;
  }
`

export const Title = styled.span``

export const Value = styled.span``