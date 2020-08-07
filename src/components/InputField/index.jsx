import React from 'react'
import { useField } from 'formik'

import { Wrapper, Input, Label, Error } from './style'

const InputField = ({ label, textarea, ...props }) => {
  const [field, meta, helpers] = useField(props)

  return (
    <>
      <Wrapper>
        <Label>
          {label}
          <Input {...field} {...props} />
        </Label>
      </Wrapper>
      {meta.touched && meta.error ? (
        <Error className="error">{ meta.error }</Error>
      ) : null}
    </>
  )
}

export default InputField
