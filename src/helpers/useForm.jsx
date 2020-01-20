import { useState } from 'react'

const useForm = (callback, schema) => {
  const initialFields = {}
  Object.keys(schema).forEach(key => {
    initialFields[key] = {
      value: '',
      isValid: false
    }
  })
  const [values, setValues] = useState(initialFields)
  const [validate, setValidate] = useState(false)

  const handleSubmit = event => {
    if (event) event.preventDefault()
    callback()
  }

  const handleChange = async event => {
    event.persist()
    const {
      target: { name, value }
    } = event

    const isValid = await schema[name].isValid(value)
    setValues(values => ({
      ...values,
      [name]: {
        isValid,
        value
      }
    }))
    setValidate(!Object.keys(values).filter(key => !values[key].isValid)[0])
  }

  return {
    handleChange,
    handleSubmit,
    values,
    validate
  }
}

export default useForm
