import styled from 'styled-components'
import { animeLeft } from '../../../../styles/global'

export const Container = styled.div`
  h3 {
    color: #999;
    font-size: 0.875rem;
    line-height: 17px;
    margin-bottom: 5px;
    padding-left: 15px;
  }

  opacity: 0;
  transform: translateX(-20px);
  animation: ${animeLeft} 0.3s forwards;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  background-color: var(--content);
  border-radius: var(--border-radius);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

  @media (min-width: 600px) {
    & {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1000px) {
    & {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
