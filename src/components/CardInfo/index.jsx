import { hideCardNumber } from '../../utils'
import { StyledCardInfoText } from './styled'

const CardInfoText = ({ data }) => {
  return Object.entries(data).map((item) => (
    <StyledCardInfoText key={item[0]}>
      {item[0] === 'cardNumber' ? hideCardNumber(item[1]) : item[1]}
    </StyledCardInfoText>
  ))
}

export default CardInfoText
