import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 16px 12px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors['gray-100']};
  border-radius: 4px;
  margin: 20px 8px;
`
