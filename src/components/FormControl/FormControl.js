import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const FormControl = React.forwardRef(({ label, errorMessage, id, ...rest }, ref) => (
  <S.FormControl id={`${id}-group`}>
    {!!label && (
      <S.Label htmlFor={id} data-testid="input-label">
        {label}
      </S.Label>
    )}
    <S.Input
      id={id}
      ref={ref}
      aria-invalid={errorMessage ? 'true' : 'false'}
      aria-describedby={errorMessage ? `${id}-error` : undefined}
      {...rest}
    />
    {!!errorMessage && (
      <S.ErrorMessage id={`${id}-error`} data-testid="error-message">
        {errorMessage}
      </S.ErrorMessage>
    )}
  </S.FormControl>
))

FormControl.displayName = 'FormControl'

FormControl.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  id: PropTypes.string
}

export default FormControl
