import styled from 'styled-components'

export const PaymentStyled = styled('section')`
  padding: 2rem 0;

  display: flex;
  h3 {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.textGrey};
  }

  @media (min-width: 992px) {
    align-items: center;
    > div {
      flex: 1;
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }
  @media (max-width: 991.98px) {
    padding: 1.5rem 0;
    flex-direction: column;
  }
`
