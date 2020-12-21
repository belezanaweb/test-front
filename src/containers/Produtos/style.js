import styled, { css } from 'styled-components'
import Paper from '../../components/Paper'

export const Product = styled.div`
  border: 1px solid #eee;
  border-radius: var(--border-radius);
  display: grid;
  gap: var(--spacing);
  grid-template-columns: 65px 1fr;
  padding: var(--spacing);

  img {
    width: 100%;
  }
`
export const Price = styled.div`
  font-weight: 700;
  text-align: right;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Container = styled(Paper)`
  display: grid;
  gap: 15px;
  padding: var(--spacing);
  ${(p) =>
    p.condensed &&
    css`
      ${Product} {
        grid-template-columns: 42px 1fr;
      }
    `}
`
