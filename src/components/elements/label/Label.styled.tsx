import styled from 'styled-components'

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.label};
  font-weight: 700;
  line-height: 0.875rem;

  color: ${({ theme }) => theme.color.text.label.primary};
`
