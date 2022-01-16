import React, { ChangeEvent, InputHTMLAttributes } from 'react'

import { StyledInput } from './Input.styled'

type InputProps = InputHTMLAttributes<any> & {
  mask?: string,
  invalid?: boolean
}

function Input({ mask, ...props }: InputProps): JSX.Element {
  const patterns: any = {
    9: /[0-9]/,
    A: /[A-Za-z]/,
    '*': /[A-Za-z0-9]/
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    if (mask) {
      event.target.value = maskValue(value)
    }

    if (props.onChange) {
      props.onChange(event)
    }
  }

  function maskValue(value: string): string {
    if (!mask) return value

    let result = ''

    const arr = value.replace(/((?![A-Za-z0-9]).)/g, '').split('')

    for (let i = 0; i < mask.length; i++) {
      const char = mask[i]

      if (Object.keys(patterns).includes(char)) {
        const val = arr.shift()

        const regex = patterns[char]
        if (regex.test(val)) {
          result += val
        }
      } else {
        result += char
      }

      if (arr.length === 0) break
    }

    return result
  }

  return <StyledInput {...props} onChange={handleChange} />
}

export default Input
