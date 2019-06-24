import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled/macro'
import CheckoutSection from '../CheckoutSection'
import { formatCurrency } from '../../../../helpers/formatCurrency'

function ProductListSection ({ area, items, showPrice, image: imageSize }) {
  return (
    <CheckoutSection area={area} title="Produtos">
      <ProductListSection.List>
        {items.map(({ product: { sku, name, imageObjects, priceSpecification } }) => {
          const [firstImage] = imageObjects
          const { price } = priceSpecification

          return (
            <ProductListSection.Item key={sku} showPrice={showPrice}>
              <ProductListSection.ImageContainer size={imageSize}>
                <img src={firstImage[imageSize]} alt={`Imagem ilustrativa do item ${name}`} />
              </ProductListSection.ImageContainer>
              <ProductListSection.Name>{name}</ProductListSection.Name>
              {showPrice && (
                <ProductListSection.Price>{formatCurrency(price)}</ProductListSection.Price>
              )}
            </ProductListSection.Item>
          )
        })}
      </ProductListSection.List>
    </CheckoutSection>
  )
}

ProductListSection.propTypes = {
  area: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        sku: PropTypes.string,
        imageObjects: PropTypes.arrayOf(
          PropTypes.shape({
            thumbnail: PropTypes.string,
            small: PropTypes.string
          })
        ),
        priceSpecification: PropTypes.shape({
          price: PropTypes.number
        })
      })
    })
  ),
  showPrice: PropTypes.bool,
  image: PropTypes.oneOf(['thumbnail', 'small']).isRequired
}

ProductListSection.List = styled.ol`
  margin: 0;
  padding: 0;
`

ProductListSection.Item = styled.li`
  border: 1px solid #eee;
  color: #121212;
  display: grid;
  grid-gap: 15px 10px;
  ${({ showPrice }) =>
    showPrice
      ? css`
          grid-template-areas: 'image name' 'image price';
        `
      : css`
          grid-template-areas: 'image name';
        `}
  grid-template-columns: max-content 1fr;
  list-style-type: none;
  margin: ${({ showPrice }) => (showPrice ? '15px' : '12px')} 0;
  padding: 12px 10px;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const imageContainerMaxSizes = {
  thumbnail: '42px',
  small: '65px'
}

ProductListSection.ImageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-area: image;
  justify-content: flex-end;
  height: ${({ size }) => imageContainerMaxSizes[size]};
  width: ${({ size }) => imageContainerMaxSizes[size]};

  img {
    max-height: 100%;
    max-width: 100%;
  }
`

ProductListSection.Name = styled.div`
  font-size: 13px;
  grid-area: name;
  line-height: 16px;
`

ProductListSection.Price = styled.div`
  font-size: 14px;
  font-weight: bold;
  grid-area: price;
  line-height: 17px;
  text-align: right;
`

export default ProductListSection
