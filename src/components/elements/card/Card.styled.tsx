import styled from 'styled-components'

export const StyledCard = styled.div`
  width: 100%;

  padding: 0.75rem;

  border-radius: ${({ theme }) => theme.borderRadius.default};

  background-color: ${({ theme }) => theme.color.background.card.primary};

  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`
