import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { CartItem } from '../../components/CartItem'
import { Column } from '../../components/Column/styles'
import { Summary } from '../../components/Summary'
import { Heading, TextBody } from '../../components/Typography/styles'

import { usePayment } from '../../hooks/usePayment'
import { useData } from '../../services/hooks/useData'

import { formatCardNumHidden } from '../../utils/format'

export function Confirmation() {
  const { data, isLoading } = useData()
  const navigate = useNavigate()
  const { payment } = usePayment()

  function toBagPage() {
    navigate('/bag')
  }

  return (
    <>
      <Card>
        <Column>
          <Heading size="xxLarge" margin="4px">
            Compra efetuada com sucesso
          </Heading>
          <TextBody color="gray-600" size="medium" margin="4px">
            {formatCardNumHidden(payment.cardNumber)}
          </TextBody>
          <TextBody color="gray-600" size="medium" margin="4px">
            {payment.cardHolderName}
          </TextBody>
          <TextBody color="gray-600" size="medium" margin="4px">
            {payment.cardExpirationDate}
          </TextBody>
        </Column>
      </Card>

      <Card loading={isLoading}>
        <Heading size="xLarge">Produtos</Heading>
        {data?.items.map((item) => (
          <CartItem key={item.product.sku} {...item.product} />
        ))}
      </Card>
      {data && !isLoading && (
        <Summary summary={data.summary}>
          <Button onClick={toBagPage} aria-label="Start again">
            Voltar ao inicio do protótipo
          </Button>
        </Summary>
      )}
    </>
  )
}
