import React, { useState } from 'react'

export function useForm(initialValues) {
  const [form, setForm] = useState(initialValues)

  const onChange = (value, name) => {
    setForm({ ...form, [name]: value })
  }
  return { form, onChange }
}
