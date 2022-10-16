import * as Styles from './ConfirmationMessage.styles'
import icon from '../../../assets/imgs/confirmation-icon.png'
interface ConfirmationMessageProps {
    text: string;
}

const ConfirmationMessage: React.FC<ConfirmationMessageProps> = ({ text }) => {
    return (
        <Styles.Container>
            <Styles.Icon src={icon} alt='sucesso' />
            <Styles.Message>{text}</Styles.Message>
        </Styles.Container>
    )
}

export default ConfirmationMessage
