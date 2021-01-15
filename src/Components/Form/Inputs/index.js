import React, { useRef, useState } from 'react'
import { incrementValid } from '../../../Actions/Form/index'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { Inp } from './styles'
import * as validator from '../Validator/index'

function Campo({ type, data, mask, placeholder }) {
  const ref = useRef()
  const dispatch = useDispatch()
  const [error, setError] = useState(false)
  function testStep() {
    const value = ref.current.getInputValue()
    const valid = validator.validate(data, value)
    if (valid.isValid) {
      dispatch(incrementValid(valid.type, true), [dispatch])
      setError(false)
    } else {
      dispatch(incrementValid(valid.type, false), [dispatch])
      setError(true)
    }
  }
  return (
    <Inp
      classe={error ? 1 : 0}
      mask={mask}
      placeholder={placeholder}
      type={type}
      ref={ref}
      data={data}
      onBlur={() => testStep(data)}
    />
  )
}
export default connect()(Campo)
