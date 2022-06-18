import * as S from './styled'

export const InputField = ({ fieldName, label, register, errors, placeholder, onChange }) => {
  
  return (
    <S.StyledInputWrapper>
      <S.StyledLabel>{label}</S.StyledLabel>
      <S.StyledInput 
        invalid={errors[fieldName]}
        {...register(fieldName,
          {
            required: `${label.slice(0, -1)} é obrigatório.`,
          }
        )}
        placeholder={placeholder}
      />
      {errors[fieldName] && <S.StyledInputErrorText>{errors[fieldName].message}</S.StyledInputErrorText>}
    </S.StyledInputWrapper>
  )
}