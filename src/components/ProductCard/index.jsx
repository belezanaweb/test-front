import * as S from './styled'

const ProductCard = ({ hideDetails, product: { name, image, price } }) => {
  return (
    <S.StyledProductCardWrapper>
      <S.StyledProductCardImage hideDetails={hideDetails} src={image} />
      <S.StyledProductCardTextWrapper>
        <S.StyledProductCardTextName>{name}</S.StyledProductCardTextName>
        {!hideDetails && <S.StyledProductCardTextPrice>{price}</S.StyledProductCardTextPrice>}
      </S.StyledProductCardTextWrapper>
    </S.StyledProductCardWrapper>
  )
}

export default ProductCard
