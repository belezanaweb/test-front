import { useState } from 'react'

const useForm = (callback, schema) => {
  const [values, setValues] = useState({})

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
  }

  return {
    handleChange,
    handleSubmit,
    values
  }
}

export default useForm
