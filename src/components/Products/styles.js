import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: flex-start;

  border: 1px solid var(--background);
  background-color: var(--white);

  padding: 0.87rem 0.62rem;
  font-size: 0.87rem;

  @media (min-width: 920px) {
    justify-content: flex-start;
  }

  &:not(:last-child) {
    margin-bottom: 0.93rem;
  }
`

export const WrapperProducts = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
  position: relative;

  strong {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @media (max-width: 480px) {
    p {
      padding-bottom: 1rem;
    }
    strong {
      position: absolute;
  
      right: 0;
      bottom: -0.2rem;
    }
 }

`

export const Image = styled.img`
  width: ${({ showPrice }) => (showPrice ? '4rem' : '2.62rem')};

  margin-right: 0.68rem;
`
