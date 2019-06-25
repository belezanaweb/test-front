import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled/macro'

function Field ({ children, error, htmlFor, label, span }) {
  return (
    <Field.Container key={`field-${htmlFor}`} span={span}>
      <Field.Header htmlFor={htmlFor}>{label}:</Field.Header>
      <Field.Body>{children}</Field.Body>
      {error && <Field.Error>{error}</Field.Error>}
    </Field.Container>
  )
}

Field.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.node,
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  span: PropTypes.number
}

Field.Container = styled.div`
  grid-column-start: span ${({ span }) => span || 1};
`

Field.Term = styled.dt`
  font-weight: bold;
  margin: 0;
  padding: 0;
`

Field.Label = styled.label`
  color: #ccc;
  font-size: 12px;
  font-weight: bold;
  line-height: 12px;
  padding: 0 2px;
`

Field.Header = ({ children, ...props }) => (
  <Field.Term>
    <Field.Label {...props}>{children}</Field.Label>
  </Field.Term>
)
Field.Header.propTypes = { children: PropTypes.node }

Field.Body = styled.dd`
  margin: 0;
  padding: 3px 0 0;
`

Field.Error = styled(Field.Body)`
  color: ${({
    theme: {
      colors: { error }
    }
  }) => error};
  font-size: 12px;
  line-height: 14px;
  padding-left: 2px;
  padding-right: 2px;
`

Field.Error.defaultProps = {
  'data-testid': 'field-error'
}

export default Field
