import { formatMoney } from '../utils'

export default function MonetaryValue({
  value,
  className = '',
  isDiscount = false
}: {
  value: number,
  className?: string,
  isDiscount?: boolean
}) {
  return (
    <div className={`${className} text-sm text-ellipsis text-end`}>
      <span>R$ </span>
      <span className={isDiscount ? 'line-through' : ''}>{formatMoney(value)}</span>
    </div>
  )
}
