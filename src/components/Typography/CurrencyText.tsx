import { TextBody, TypographyProps } from './styles'

interface CurrencyTextProps extends TypographyProps {
  value: number;
}

export function CurrencyText({ value, ...rest }: CurrencyTextProps) {
  return (
    <TextBody {...rest}>
      {value?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
    </TextBody>
  )
}
