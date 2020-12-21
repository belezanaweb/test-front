import styled from 'styled-components'
import Paper from '../../components/Paper'

export const Wrapper = styled(Paper)`
  display: grid;
  gap: 15px;
  padding: var(--spacing);
`

export const Product = styled.div`
  border: 1px solid #eee;
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
