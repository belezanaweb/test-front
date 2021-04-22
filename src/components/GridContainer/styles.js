import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: grid;
  ${({ columns }) =>
    columns &&
    css`
      grid-template-columns: ${columns};
    `}
`
