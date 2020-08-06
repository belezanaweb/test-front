import styled from "@emotion/styled"

export const ProductListWrapper = styled.div`
  padding: 0.5rem;
  width: 100%;

  @media (min-width: ${ ({ theme }) =>  theme.breakpoints.small }px) {
    padding: 1rem;
    width: 60%;
  }
  @media (min-width: 1100px) {
    width: 65%;
  }
`



