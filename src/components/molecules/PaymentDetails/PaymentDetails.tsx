import { Payment } from '../../../interfaces/Payment.interface';
import { anonimizateCreditCardNumber } from '../../../utils/mask';
import * as Styles from './PaymentDetails.styles'

interface PaymentDetailsProps {
    payment: Payment;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ payment }) => {
    return (
        <Styles.Container>
            <Styles.Detail>{anonimizateCreditCardNumber(payment.creditCardNumber)}</Styles.Detail>
            <Styles.Detail>{payment.creditCardName}</Styles.Detail>
            <Styles.Detail>{payment.creditCardDate}</Styles.Detail>
        </Styles.Container>
    )
}

export default PaymentDetails
