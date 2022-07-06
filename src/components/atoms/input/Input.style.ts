import styled from 'styled-components'

interface InputContainerProps {
  expand?: boolean
  minWidth?: string
}

interface InputBoxProps {
  invalid: boolean
}

export const InputContainer = styled.div<InputContainerProps>(
  ({ expand = true, minWidth }) => `
display: flex;
flex-direction: column;
margin-bottom: 25px;
position: relative;
${expand ? 'flex: 1;' : ''}
min-width: ${minWidth || '150px'};
`
)

export const InputLabel = styled.label(
  ({ theme }) => `
color: ${theme.colors.lightGray};
font-size: ${theme.fonts.label};
font-weight: 700;
line-height: 14px;
margin-bottom: 5px;
`
)

export const InputBox = styled.input<InputBoxProps>(
  ({ invalid, theme }) => `
box-sizing: border-box;
height: 45px;
border-radius: ${theme.borderRadius};
background-color: ${theme.colors.white};
border: 1px solid ${invalid ? theme.colors.red : theme.colors.mediumGray};
box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
font-size: ${theme.fonts.input};
line-height: 19px;
outline: none;
padding: 13px;
:focus {
  color: ${theme.colors.black};
  border: 1px solid ${theme.colors.purple};
}
::placeholder,
::-webkit-input-placeholder {
  color: ${theme.colors.ultraLightGray};
}
:-ms-input-placeholder {
  color: ${theme.colors.ultraLightGray};
}
`
)

export const InputErrorMessage = styled.label(
  ({ theme }) => `
color: ${theme.colors.red};
font-size: ${theme.fonts.label};
line-height: 14px;
position: absolute;
bottom: -17px;
`
)
