import * as S from './styled'
import SuccessIcon from '../../assets/icons/SuccessIcon'

const PaymentSuccess = () => {
  return (
    <S.StyledPaymentSuccessWrapper>
      <SuccessIcon />
      <S.StyledPaymentSuccessText>Compra efetuada com sucesso</S.StyledPaymentSuccessText>
    </S.StyledPaymentSuccessWrapper>
  )
}

export default PaymentSuccess
