import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  align-self: center;
  padding: 9px;
  max-width: 1220px;

  > button {
    @media (min-width: 769px) {
      width: 300px;
    }
  }
`

export const ResponsiveBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 769px) {
    flex-direction: row;

    > section:nth-child(1) {
      flex: 3 0 0;
    }

    > section:nth-child(2) {
      flex: 1 0 0;
    }
  }
`
