import styled from 'styled-components'
import { DFlexStyled } from '../../styles/global'

export const PaymentStyled = styled('section')`
  padding: 2rem 0;
  FORM {
    display: flex;
  }
  h3 {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.textGrey};
  }

  @media (min-width: 992px) {
    form {
      align-items: center;
      > div {
        flex: 1;
        &:not(:last-child) {
          margin-right: 2rem;
        }
      }
    }
  }
  @media (max-width: 991.98px) {
    padding: 1.5rem 0;
    form {
      flex-direction: column;
    }
  }
`

export const DFlexExtended = styled(DFlexStyled)`
  > div:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing};
    width: 60%;
  }
  div {
    flex: auto;
  }
`
