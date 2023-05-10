import { FC } from 'react'

import * as S from './styles'

type Props = {
  label: string
  name: string
  mask?: string
  placeholder?: string
  error?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<Props> = ({
  label,
  name,
  mask,
  placeholder,
  error,
  value,
  onChange
}) => {
  return (
    <S.Container $error={!!error}>
      <S.Label>{label}</S.Label>
      <S.Input
        mask={mask}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
}
