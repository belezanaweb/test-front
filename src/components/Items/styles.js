import styled from 'styled-components'

export const ItemsContainer = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;

  border: 1px solid var(--background);
  background-color: var(--white);

  padding: 0.87rem 0.62rem;
  max-width: 316px;

  img {
    width: 4rem;
  }
`
