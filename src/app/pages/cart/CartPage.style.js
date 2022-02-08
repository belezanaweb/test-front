import styled from 'styled-components'

export const ContainerProducts = styled.section`
  margin: 0 ${({ theme }) => theme.spacing.SMALL};
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: ${({ theme }) => theme.borderRadius.SMALL};
  box-shadow: 0px 2px 4px 2px rgb(0 0 0 / 10%);
  ul {
    padding: ${({ theme }) => theme.spacing.SMALL};
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
export const ContainerCheckoutInfo = styled.section`
  margin: ${({ theme }) => theme.spacing.SMALL};
  border-radius: ${({ theme }) => theme.borderRadius.SMALL};
  border: solid 1px ${({ theme }) => theme.colors.GREY};
  padding: ${({ theme }) => theme.spacing.SMALL};
  ul {
    li {
      display: flex;
      justify-content: space-between;
      font-size: ${({ theme }) => theme.fontSize.MEDIUM};
      text-transform: uppercase;
      margin-bottom: 5px;
      color: ${({ theme }) => theme.colors.DARK};
      strong {
        font-weight: 400;
      }
    }
    li:nth-child(3) {
      color: ${({ theme }) => theme.colors.LIGHT_ORANGE};
    }
    li:nth-child(4) {
      font-weight: bold;
      strong {
        font-weight: bold;
      }
    }
  }
`
