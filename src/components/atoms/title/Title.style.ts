import styled from 'styled-components'

export const Heading = styled.h1(
  ({ theme }) => `
    font-size: ${theme.fonts.title};
    color: ${theme.colors.secondary};
    font-weight: 700;
    text-transform: uppercase;
    margin: 0px 0px 5px;
    line-height: 17px;
  `
)
