import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const Content = styled.div`
  padding: 0 0.875rem;

  .buttonContainer {
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 600px) {
    & button {
      flex: 0.483;
    }
  }

  @media (min-width: 1000px) {
    & button {
      flex: 0.328;
    }
  }
`
