import styled from 'styled-components'

export const ContainerTitleSection = styled.section`
  margin: 20px 20px 5px 20px;
  h1 {
    font-size: ${({ theme }) => theme.fontSize.MEDIUM};
    color: ${({ theme }) => theme.colors.DARK_GREY};
    text-transform: uppercase;
  }
`
