import { currencyFormat } from '../../../../../utils/currency'
import * as Styles from './PriceItem.styles'

interface PriceItemProps {
  description: string;
  price: number;
  isTotal?: boolean;
  isDiscount?: boolean;
}

const PriceItem: React.FC<PriceItemProps> = ({
  description,
  price,
  isTotal,
  isDiscount
}: PriceItemProps) => {
  return (
    <Styles.Container isTotal={isTotal} isDiscount={isDiscount}>
      <Styles.PriceDescription>{description}</Styles.PriceDescription>
      <Styles.PriceValue>
        {price && (isDiscount ? ' - ' : '') + currencyFormat(price)}
      </Styles.PriceValue>
    </Styles.Container>
  )
}

export default PriceItem
