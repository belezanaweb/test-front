import * as React from 'react'

import * as S from './style'

export const Input = ({ id, label, style, className, error, ...props }, ref) => (
  <S.Wrapper isInvalid={!!error}>
    {label && <S.Label>{label}</S.Label>}
    <S.Input {...props} ref={ref} />
    {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
  </S.Wrapper>
)

export default React.forwardRef(Input)
