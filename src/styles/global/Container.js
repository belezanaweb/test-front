import styled from 'styled-components'

export const MainContainer = styled.body`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 70vw;
    margin: 50px auto 0px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 1px auto 0px;
  }
`
