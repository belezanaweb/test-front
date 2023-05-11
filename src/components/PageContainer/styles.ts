import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  ${media.greaterThan('medium')`
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: center;
    padding: 20px 8px;
    gap: 20px;
  `}
`
