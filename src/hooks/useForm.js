import { useState } from 'react'

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)
    const onChange = (name, value) => {
        const newForm = { ...form, [name]: value }
        setForm(newForm)
    }
    return { form, onChange }
}