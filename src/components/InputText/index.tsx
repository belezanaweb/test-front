import PropTypes from 'prop-types'
import React, { FormEvent } from 'react'
import { maskJs } from 'mask-js'
import { InputStyled } from './styles'
import { TextColorStyled } from '../../styles/global'

interface IProps {
  name: string
  label?: string
  placeholder?: string
  value?: string | number
  type?: string
  textError: string | undefined
  hasError: boolean
  maxLength?: number
  mask?: string
  onChange(e: FormEvent<HTMLTextAreaElement | HTMLInputElement>): void
}

const InputText: React.FC<IProps> = ({
  label,
  name,
  value,
  onChange,
  textError,
  hasError,
  placeholder,
  maxLength,
  type,
  mask
}) => {
  function changeValue(e: FormEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    if (mask) {
      const target = e.target as HTMLTextAreaElement | HTMLInputElement
      target.value = maskJs(mask, target.value)
    }
    onChange(e)
  }

  return (
    <InputStyled error={hasError}>
      <label htmlFor="name">{label}</label>
      <input
        name={name}
        id={name}
        type={type}
        onChange={changeValue}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      {hasError && (
        <div className="error">
          <TextColorStyled color="#F30">{textError}</TextColorStyled>
        </div>
      )}
    </InputStyled>
  )
}

InputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  textError: PropTypes.string,
  hasError: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  mask: PropTypes.string
}

InputText.defaultProps = {
  label: '',
  maxLength: 50,
  textError: '',
  placeholder: '',
  type: 'text',
  value: '',
  mask: ''
}

export default InputText
