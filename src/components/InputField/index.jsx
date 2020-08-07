import React, { useMemo } from 'react'
import { useField } from 'formik'

import { Wrapper, Input, Label, Error } from './style'

const InputField = ({ label, textarea, column = 1, ...props }) => {
  const [field, meta, helpers] = useField(props)

  const error =  useMemo(() => { return (meta.touched && meta.error) }, [meta])
  
  return (
    <>
      <Wrapper column={column}>
        <Label>
          {label}
          <Input error={error} {...field} {...props} />
        </Label>
        {meta.touched && meta.error ? (
          <Error data-testid="input-error" className="error">{ meta.error }</Error>
        ) : null}
      </Wrapper>
    </>
  )
}

export default InputField
