import styled from 'styled-components'

export const Heading = styled.h1(
  ({ theme }) => `
  font-size: ${theme.fonts.title};
  color: ${theme.colors.secondary};
  font-weight: bold;
  text-transform: uppercase;
  margin: 10px 0px 5px;
`
)
