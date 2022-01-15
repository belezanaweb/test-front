import styled from 'styled-components'

export const StyledErrorText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.errorText};

  line-height: 0.875rem;

  color: ${({ theme }) => theme.color.text.error};
`
