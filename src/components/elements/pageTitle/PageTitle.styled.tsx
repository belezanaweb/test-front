import styled from 'styled-components'

export const StyledPageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.pageTitle};
  font-weight: 700;
  line-height: 1.0625;

  color: ${({ theme }) => theme.color.text.pageTitle};

  text-transform: uppercase;
`
