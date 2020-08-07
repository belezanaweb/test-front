import React from 'react'
import { useField } from 'formik'

import { Wrapper, Input, Label, Error } from './style'

const InputField = ({ label, textarea, column = 1, ...props }) => {
  const [field, meta, helpers] = useField(props)

  return (
    <>
      <Wrapper column={column}>
        <Label>
          {label}
          <Input error={meta.touched && meta.error} {...field} {...props} />
        </Label>
        {meta.touched && meta.error ? (
          <Error className="error">{ meta.error }</Error>
        ) : null}
      </Wrapper>
    </>
  )
}

export default InputField
