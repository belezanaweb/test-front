import styled from 'styled-components'

export const ContainerProducts = styled.section`
  margin: 0 ${({ theme }) => theme.spacing.SMALL};
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: ${({ theme }) => theme.borderRadius.SMALL};
  box-shadow: 0px 2px 4px 2px rgb(0 0 0 / 10%);
  ul {
    padding: 12px;
    li {
      margin-bottom: ${({ theme }) => theme.spacing.SMALL};
      border: solid 1px ${({ theme }) => theme.colors.SUBLIME_GREY};
      padding: 10px;
      overflow: hidden;
      min-height: 90px;
      img {
        float: left;
        margin-right: 15px;
      }
      p {
        font-size: ${({ theme }) => theme.fontSize.SMALL};
      }
      strong {
        float: right;
      }
    }
    li:last-child {
      margin-bottom: 0;
    }
  }
`
