import { CardStyled } from 'components/card/card.style'
import { SuccessDialogStyled } from 'components/success-dialog/success-dialog.style'
import { SummaryStyled } from 'components/summary/summary.style'
import styled from 'styled-components'

export const ConfirmContainerStyled = styled.section`

  @media only screen and (min-width: 768px) {
    padding-top: 24px
  }

  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto;
    align-items: flex-start;
    gap: 20px;

    max-width: 1200px;
    margin: 0 auto;

    ${SuccessDialogStyled} {
      grid-row: 1;
      grid-column: 1 / -1;
      margin: 0;
    }

    .payment-info {
      grid-column: 2;
      grid-row: 2;

      ${CardStyled} {
        margin-bottom: 0;
      }
    }

    .products {
      grid-column: 1;
      grid-row: 2 / 5
    }

    ${SummaryStyled} {
      grid-column: 2;
      grid-row: 3;
       width: 100%;
    }
  }

  @media only screen and (min-width: 1800px) {
    grid-template-columns: 2fr 1fr;
    max-width: 1800px;
  }

`