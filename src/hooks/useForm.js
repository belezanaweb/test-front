import { useState } from 'react'

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues)

  const onChange = (event) => {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }

    setForm(newForm)
  }

  const reset = () => {
    setForm(initialValues)
  }

  return { form, onChange, reset }
}
