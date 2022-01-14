import styled from 'styled-components'

export const ProductsHeaderTitle = styled.span`
  margin: 2rem 1rem 0.5rem;
  color: #999;
  font-weight: bold;
  display: block;
`

export const ProductsContainer = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 1px 1px 5px rgba(0, 0, 29, 0.22);

  display: flex;
  flex-direction: column;

  & div + div {
    margin-top: 2rem;
  }

  @media (max-width: 720px) {
    padding: 1rem;

    & div + div {
      margin-top: 1rem;
    }
  }
`

export const ProductsItem = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 3px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProductsContentImg = styled.img`
  width: 4rem;
  height: 4rem;
`

export const ProductsContentText = styled.p`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: #212122;
`
