import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  @media (max-width: 768px) {
    max-width: 360px;
  }

  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
`
