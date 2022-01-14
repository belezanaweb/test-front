import React from 'react'
import * as S from './Input.styles'

const Input = React.forwardRef(({ label, id, ...props }, ref) => {
  return (
    <>
      <S.StyledLabel htmlFor={id}>{label}</S.StyledLabel>
      {props.mask ? (
        <S.StyledInputMask id={id} {...props} ref={ref} />
      ) : (
        <S.StyledInput id={id} {...props} ref={ref} />
      )}
    </>
  )
})

export default Input
