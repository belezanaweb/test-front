import styled, { css } from 'styled-components'

export const ContainerTabNav = styled.section(
  ({ theme }) => css`
    padding: ${theme.spacing.SMALL};
    background-color: ${theme.colors.WHITE};
    box-shadow: 1px -5px 10px 1px rgb(0 0 0 / 50%);
    nav {
      margin: 0;
      padding: 0;
      ul {
        display: flex;
        justify-content: center;
        li {
          list-style: none;
          margin: 0 ${theme.spacing.SMALL};
          font-size: ${theme.fontSize.MEDIUM};
          font-weight: bold;
          a {
            text-decoration: none;
          }
        }
      }
    }
  `
)
