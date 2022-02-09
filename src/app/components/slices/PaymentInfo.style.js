import styled from 'styled-components'

export const ContainerProducts = styled.section`
  margin: 0 ${({ theme }) => theme.spacing.SMALL};
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 2px rgb(0 0 0 / 10%);
  ul {
    padding: ${({ theme }) => theme.spacing.SMALL} 10px;
  }
`
