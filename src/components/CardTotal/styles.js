import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  padding: 0.93rem 0.87rem;
  border: 1px solid var(--grey);
  font-size: 0.87rem;

  margin-top: 1.25rem;

  p {
    text-transform: uppercase;
    margin-top: 0.5rem;
  }

  .total {
    margin-top: 1rem;
    font-weight: bold;
  }

  .discount {
    color: var(--orange);
  }
`

export const WrapperItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
