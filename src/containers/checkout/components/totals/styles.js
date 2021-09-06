import styled from 'styled-components'
import { animeLeft } from '../../../../styles/global'

export const Container = styled.div`
  padding: 15px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: var(--border-radius);
  opacity: 0;
  transform: translateX(-20px);
  animation: ${animeLeft} 0.3s forwards;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span + span {
      display: block;
      margin-bottom: 9px;
    }

    strong {
      margin-top: 9px;
    }
  }

  .discount {
    color: var(--primary);
  }
`
