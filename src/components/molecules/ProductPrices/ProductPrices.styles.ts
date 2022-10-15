import styled, { css } from 'styled-components'

export const Container = styled.div(
  ({ theme }) => css`
    border: solid 1px ${theme.colors.lightGray};
    width: 100%;
    border-radius: 3px;
    margin-top: 20px;
    padding: 15px 13px 13px 14px;
  `
)
