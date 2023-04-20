import { CheckoutItemsSummary } from './interfaces'

import { Text } from 'components'
import * as Styled from './styled'
import { parse } from 'utils/money'

const CheckoutItemsSummary = ({ summary }: CheckoutItemsSummary) => {
  return (
    <Styled.Wrapper>
      <Styled.Row>
        <Text size="medium">Produtos: {summary.items.length} itens</Text>
        <Text size="medium">{parse(summary.subTotal)}</Text>
      </Styled.Row>

      <Styled.Row>
        <Text size="medium">Frete: </Text>
        <Text size="medium">{parse(summary.shippingTotal)}</Text>
      </Styled.Row>

      <Styled.Row>
        <Text size="medium">Desconto: </Text>
        <Text size="medium" $color="primary" weight="bold">
          {parse(summary.discount)}
        </Text>
      </Styled.Row>

      <Styled.Row>
        <Text size="large" weight="bold">
          Subtotal:
        </Text>
        <Text size="large" weight="bold">
          {parse(summary.total)}
        </Text>
      </Styled.Row>
    </Styled.Wrapper>
  )
}

export default CheckoutItemsSummary
