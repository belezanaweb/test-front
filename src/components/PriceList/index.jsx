import * as S from './styled'

export const PriceList = ({ prices: { subTotal, shippingTotal, discount, total } }) => {

  return (
    <S.StyledPriceListContainer>
      <S.StyledPriceListItem>
        <S.StyledPriceListText>Produtos</S.StyledPriceListText>
        <S.StyledPriceListText>{subTotal}</S.StyledPriceListText>
      </S.StyledPriceListItem>
      <S.StyledPriceListItem>
        <S.StyledPriceListText>Frete</S.StyledPriceListText>
        <S.StyledPriceListText>{shippingTotal}</S.StyledPriceListText>
      </S.StyledPriceListItem>
      <S.StyledPriceListItem>
        <S.StyledPriceListText discount>Desconto</S.StyledPriceListText>
        <S.StyledPriceListText discount>{discount}</S.StyledPriceListText>
      </S.StyledPriceListItem>
      <S.StyledPriceListItem>
        <S.StyledPriceListText total>Total</S.StyledPriceListText>
        <S.StyledPriceListText total>{total}</S.StyledPriceListText>
      </S.StyledPriceListItem>

    </S.StyledPriceListContainer>
  )

}