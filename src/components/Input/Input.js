import PropTypes from 'prop-types'
import styled from '@emotion/styled/macro'

const Input = styled.input`
  background-color: #fff;
  border: 1px solid
    ${({
    hasErrors,
    theme: {
      colors: { error }
    }
  }) => (hasErrors ? error : '#e7e7e7')};
  border-radius: 3px;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  color: #212121;
  display: block;
  font-size: 16px;
  line-height: 22px;
  padding: 11px 12px;
  width: 100%;

  ::placeholder {
    color: #e0e7ee;
  }

  :focus {
    border-color: #a43287;
  }
`

Input.propTypes = {
  hasErrors: PropTypes.bool
}

export default Input
