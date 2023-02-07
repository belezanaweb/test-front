type CurrencyProps = {
  children: number
}

export function Currency({ children  }: CurrencyProps) {
  const value = children
  return (
    <>{ value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</>
  )
}