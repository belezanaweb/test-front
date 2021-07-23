import styled from 'styled-components'

export const ItemsContainer = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: flex-start;

  border: 1px solid var(--background);
  background-color: var(--white);

  padding: 0.87rem 0.62rem;
  font-size: 0.87rem;

  &:not(:last-child) {
    margin-bottom: 0.93rem;
  }

  img {
    width: 4rem;

    margin-right: 0.68rem;
  }
`

export const WrapperInformations = styled.div`
  height: 100%;
  text-align: left;
  position: relative;

  strong {
    position: absolute;

    right: 0;
    bottom: 0;
  }
`
