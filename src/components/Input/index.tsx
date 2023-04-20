import { InputProps } from './interfaces'
import * as Styled from './styled'
import { Text } from 'components'
import InputMask from 'react-input-mask'

const Input = ({ label, onChange, onBlur, errorMessage = '', placeholder, name, value, mask }: InputProps) => {
  return (
    <Styled.Wrapper>
      <Text size="medium" $color="grey-strong">
        {label}
      </Text>

      {mask ? (
        <InputMask
          mask={mask}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type="text"
          onBlur={onBlur}
          name={name}
        >
          {(inputProps) => <Styled.Input {...inputProps} />}
        </InputMask>
      ) : (
        <Styled.Input
          type="text"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        />
      )}

      <Text size="small" $color="danger">
        {errorMessage}
      </Text>
    </Styled.Wrapper>
  )
}

export default Input
