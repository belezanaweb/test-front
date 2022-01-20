import styled, { css } from 'styled-components'

/* texto dos produtos do carrinho */
export const ProductItemText = styled.div`
  font-size: 13px;
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    align-content: space-around;
    justify-content: space-around;
    align-items: flex-end;
    font-size: 1.2rem;
  }
`
/* nome do produto */
export const ProductItemName = styled.p`
  font-weight: 400;
  height: 32px;
  width: 220px;
  color: #212122;
  letter-spacing: NaNpx;
  line-height: 16px;
  margin-bottom: 10px;

  @media (min-width: 500px) {
    width: 421px;
    padding: 0 8px;
  }
`

/* preço do produto */
export const ProductItemPrice = styled.p`
  height: 17px;
  width: 220px;
  color: #212122;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 17px;
  text-align: right;

  @media (min-width: 500px) {
    margin-right: 15px;
    font-size: 1.3rem;
  }
`
/* thumb dos produtos do carrinho */
export const ProductItemImageContainer = styled.picture`
  margin-right: 7px;
  min-width: 65px;
  min-height: 65px;

  @media (max-width: 600px) {
    ${({ hidePrice }) =>
      hidePrice
        ? css`
            min-width: 45px;
            min-height: 45px;
            width: 45px;
            height: 45px;
          `
        : ''}
  }
`

export const ProductItemImage = styled.img`
  width: 100%;
`

export const ProductItemSource = styled.source`
  width: 100%;
`

/* cada item do carrinho */
export const ProductItemContainer = styled.div`
  height: auto;
  width: 316px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 10px;
  border-radius: 3px;
  border: 1px solid #eee;
  margin-bottom: 15px;

  &:last-of-type {
    margin-bottom: 0px;
  }

  @media (min-width: 500px) {
    width: 521px;
  }
`
