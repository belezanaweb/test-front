import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 8px;
  gap: 20px;

  ${media.greaterThan('medium')`
    width: calc(100% - 340px);
    padding: 0;
  `}
`
