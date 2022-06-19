import * as S from './styled'
import { convertToReais } from '../../utils'

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
            {convertToReais(prices[idx])}
          </S.StyledPriceListText>
        </S.StyledPriceListItem>
      ))}
    </S.StyledPriceListContainer>
  )
}

export default PriceList
