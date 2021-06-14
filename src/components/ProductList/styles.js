import styled, { css } from 'styled-components'
import { device } from '../../styles/breakpoints'

export const ProductList = styled.ul`
  list-style: none;
  width: 100%;
`

export const ProductItem = styled.li`
  padding: var(--spacing-2);
  border: 1px solid var(--colors-gray-50);
  border-radius: var(--border-radius-md);
  display: flex;
  flex-direction: row;
  gap: var(--spacing-2);

  & + & {
    margin-top: var(--spacing-2);
  }
`

const PictureSmall = css`
  img {
    width: 42px;
    height: 42px;
  }

  @media ${device.tablet} {
    img {
      width: 64px;
      height: 64px;
    }
  }
`

export const Picture = styled.picture`
  img {
    width: 64px;
    height: 64px;
  }

  @media ${device.tablet} {
    img {
      width: 92px;
      height: 92px;
    }
  }

  ${({ small }) => !!small && PictureSmall}
`

export const ProductName = styled.p`
  color: var(--colors-gray-700);
  font-size: var(--font-size-sm);
`

export const ProductPrice = styled.span`
  color: var(--colors-gray-700);
  font-weight: bold;
  font-size: var(--font-size-md);
  align-self: flex-end;
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: var(--spacing-2);
  width: 100%;
`

export const CheckoutResume = styled.div`
  padding: var(--spacing-3) var(--spacing-2);
  border: 1px solid var(--colors-gray-200);
`
