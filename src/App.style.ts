import styled from 'styled-components'

export const Main = styled.main(
  ({ theme }) => `
    margin: 10px;
    max-width: ${theme.breakpoints.deskop};
    width: calc(100% - 20px);
  `
)
