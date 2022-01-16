import styled from 'styled-components'

export const StyledPageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.pageTitle};
  font-weight: 700;
  line-height: 1.0625;

  margin-left: 0.75rem;

  color: ${({ theme }) => theme.color.text.pageTitle.primary};

  text-transform: uppercase;
`
