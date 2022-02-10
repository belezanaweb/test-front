import styled, { css } from 'styled-components'

export const ContainerTitleSection = styled.section(
  ({ theme }) => css`
    margin: 20px 20px 5px 20px;
    h1 {
      font-size: ${theme.fontSize.MEDIUM};
      color: ${theme.colors.DARK_GREY};
      text-transform: uppercase;
    }
  `
)
