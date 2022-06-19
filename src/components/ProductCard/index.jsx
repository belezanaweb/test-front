import * as S from './styled'
import { convertToReais } from '../../utils'

const ProductCard = ({ hideDetails, product: { name, image, price } }) => {
  return (
    <S.StyledProductCardWrapper>
      <S.StyledProductCardImage hideDetails={hideDetails} src={image} />
      <S.StyledProductCardTextWrapper>
        <S.StyledProductCardTextName>{name}</S.StyledProductCardTextName>
        {!hideDetails && <S.StyledProductCardTextPrice>{convertToReais(price)}</S.StyledProductCardTextPrice>}
      </S.StyledProductCardTextWrapper>
    </S.StyledProductCardWrapper>
  )
}

export default ProductCard
