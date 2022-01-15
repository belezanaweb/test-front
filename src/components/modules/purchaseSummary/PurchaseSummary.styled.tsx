import styled from 'styled-components'

export const StyledPurchaseSummary = styled.table`
  width: 100%;

  padding: 0.75rem;

  border-radius: ${({ theme }) => theme.borderRadius.default};

  border: 1px solid ${({ theme }) => theme.color.border.purchaseSummary.primary};

  font-size: 0.875rem;
  line-height: 1.0625rem;
  color: ${({ theme }) => theme.color.text.purchaseSummary.primary};
  text-transform: uppercase;

  tbody td {
    padding-bottom: 0.25rem;
  }

  tfoot th {
    font-weight: 700;
    padding-top: 0.5rem;
  }

  .highlight {
    color: ${({ theme }) => theme.color.text.purchaseSummary.highlight};
  }
`
