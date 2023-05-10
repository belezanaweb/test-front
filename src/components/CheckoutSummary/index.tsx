import { Button } from 'components/Button'
import * as S from './styles'
import { FC } from 'react'
import { currencyFormatter } from 'utils/format'

type Props = {
  itemsTotal: number
  subTotal: number
  shippingTotal: number
  discount: number
  total: number
  action: () => void
}

export const CheckoutSummary: FC<Props> = ({
  itemsTotal,
  subTotal,
  shippingTotal,
  discount,
  total,
  action
}) => {
  const itemsTotalDescription = `(${itemsTotal} ${
    itemsTotal > 1 ? 'itens' : 'item'
  })`

  return (
    <S.Container>
      <S.Row>
        <S.Text>Produtos: {itemsTotalDescription}</S.Text>
        <S.Text>{currencyFormatter(subTotal)}</S.Text>
      </S.Row>
      <S.Row>
        <S.Text>Frete:</S.Text>
        <S.Text>{currencyFormatter(shippingTotal)}</S.Text>
      </S.Row>
      {discount && (
        <S.Row>
          <S.Text>Desconto:</S.Text>
          <S.Discount>{currencyFormatter(discount)}</S.Discount>
        </S.Row>
      )}
      <S.Row>
        <S.TextTotal>Subtotal</S.TextTotal>
        <S.TextTotal>{currencyFormatter(total)}</S.TextTotal>
      </S.Row>
      <S.ButtonWrapper>
        <Button onClick={() => action()} title="Seguir para o pagamento" />
      </S.ButtonWrapper>
    </S.Container>
  )
}
