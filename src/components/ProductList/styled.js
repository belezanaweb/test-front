import styled from 'styled-components'

/* container do valor total do carrinho */
/* textos */
export const ProductListText = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: ${({ total }) => (total ? '700' : '400')};
  color: ${({ discount }) => (discount ? '#FF7800' : '#212122')};
  @media (min-width: 500px) {
    font-size: 1.3rem;
  }
`

/* container */
export const ProductListContainer = styled.div`
  box-sizing: border-box;
  height: 129px;
  width: 341px;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 15px 15px;
  margin-bottom: 20px;

  @media (min-width: 500px) {
    width: 541px;
  }
`

/* texto de cada item */
export const ProductListItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
  color: #212122;
  font-size: 14px;
  letter-spacing: NaNpx;
  line-height: 17px;
  &:last-of-type {
    margin-bottom: 0px;
    margin-top: 16px;
  }
`
