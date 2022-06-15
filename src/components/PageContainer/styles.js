import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eee;

  @media screen and (min-width: 1024px) {
    header {
      height: 60px;
    }

    h2 {
      font-size: 1.2rem;
    }

    button {
      font-size: 1.5rem;
    }
  }
`
