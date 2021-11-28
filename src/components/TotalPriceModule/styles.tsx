import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    max-width: 500px;
    padding: 8px;
    border: 1px solid ${theme.color.border};
    border-radius: ${theme.border.radius};

    display: flex;
    flex-direction: column;
  `}
`

export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Total = styled.div`
  margin-top: 1rem;
`
