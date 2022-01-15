import React from 'react'
import * as S from './Input.styles'

const Input = React.forwardRef(({ label, id, error, ...props }, ref) => {
  return (
    <>
      <S.StyledLabel htmlFor={id}>{label}</S.StyledLabel>
      {props.mask ? (
        <S.StyledInputMask error={error} id={id} {...props} ref={ref} />
      ) : (
        <S.StyledInput error={error} id={id} {...props} ref={ref} />
      )}
      {error && <S.Error>{error.message}</S.Error>}
    </>
  )
})

export default Input
