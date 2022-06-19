import * as S from './styled'

const PriceList = ({ subTotal, shippingTotal, discount, total }) => {
  const labels = ['Produtos', 'Frete', 'Desconto', 'Total']
  const prices = [subTotal, shippingTotal, discount, total]

  return (
    <S.StyledPriceListContainer>
      {labels.map((label, idx) => (
        <S.StyledPriceListItem key={label}>
          <S.StyledPriceListText discount={label === 'Desconto'} total={label === 'Total'}>
            {label}
          </S.StyledPriceListText>
          <S.StyledPriceListText discount={label === 'Desconto'} total={label === 'Total'}>
            {prices[idx]}
          </S.StyledPriceListText>
        </S.StyledPriceListItem>
      ))}
    </S.StyledPriceListContainer>
  )
}

export default PriceList
