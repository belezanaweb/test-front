import React from 'react'
import MaskedInput from 'react-text-mask'

import * as S from './Input.styled'
import { IFieldProps } from './interface'

export const Input = (props: IFieldProps) => {
  if (props.mask) {
    return (
      <MaskedInput
        id={props.id}
        mask={props.mask}
        placeholder={props.placeholder}
        {...props.field}
        render={(ref, insideProps) => (
          <S.Input
            error={props.form.touched[props.field.name] && props.form.errors[props.field.name]}
            innerRef={ref}
            {...insideProps}
          />
        )}
      />
    )
  }

  return (
    <S.Input
      id={props.id}
      error={props.form.touched[props.field.name] && props.form.errors[props.field.name]}
      placeholder={props.placeholder}
      {...props.field}
    />
  )
}
