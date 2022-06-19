import * as S from './styled'

const InputField = ({ fieldName, label, register, errors, placeholder, validations }) => {
  return (
    <S.StyledInputWrapper>
      <S.StyledLabel>{label}</S.StyledLabel>
      <S.StyledInput
        invalid={errors[fieldName]}
        {...register(fieldName, validations)}
        placeholder={placeholder}
      />
      {errors[fieldName] && (
        <S.StyledInputErrorText>{errors[fieldName].message}</S.StyledInputErrorText>
      )}
    </S.StyledInputWrapper>
  )
}

export default InputField
