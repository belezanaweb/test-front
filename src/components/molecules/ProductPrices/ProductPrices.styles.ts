import styled, { css } from 'styled-components'

export const Container = styled.div(
  ({ theme }) => css`
    border: solid 1px ${theme.colors.lightGray};
    width: 100%;
    border-radius: ${theme.borders.radius};
    margin-top: 20px;
    padding: 15px 13px 13px 14px;

    @media (min-width: 768px) {
      width: 50%;
      margin: 20px auto 0;
    }
  `
)
