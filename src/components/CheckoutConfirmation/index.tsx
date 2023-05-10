import { Card } from 'components/Card'
import * as S from './styles'
import { FC } from 'react'
import { creditCardFormatter } from 'utils/format'

type Props = {
  title: string
  creditCardNumber: string
  creditCardName: string
  creditCardExpiration: string
}

export const CheckoutConfirmation: FC<Props> = ({
  title,
  creditCardNumber,
  creditCardName,
  creditCardExpiration
}) => (
  <Card>
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Text>{creditCardFormatter(creditCardNumber)}</S.Text>
      <S.Text>{creditCardName}</S.Text>
      <S.Text>{creditCardExpiration}</S.Text>
    </S.Container>
  </Card>
)
