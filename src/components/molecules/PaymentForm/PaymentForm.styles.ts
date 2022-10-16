import styled, { css } from 'styled-components'

export const Container = styled.div(
  ({ theme }) =>
    css`
      width: 100%;
      background-color: ${theme.colors.white};
      padding: 12px 12px 13px 13px;
      display: flex;
      gap: 15px;
      flex-direction: column;
      border-radius: 3px;
    `
)

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px
`

export const Form = styled.form``
