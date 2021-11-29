import styled, { css } from 'styled-components'
import InputMask from 'react-input-mask'

type FieldProps = {
  isValid: boolean
}

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.color.background};
    max-width: 100%;
    height: 100vh;
  `}
`

export const Content = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.container.desktop};
    margin: 0 auto;
    padding: 5px;

    > h2 {
      margin: 8px 12px 5px;
    }
  `}
`

export const BoxForm = styled.section`
  ${({ theme }) => css`
    background: ${theme.color.white};
    display: flex;
    flex-direction: column;
    gap: 24px;
    border: 1px solid ${theme.color.border};
    border-radius: ${theme.border.radius};
    padding: 24px 8px;
    padding-top: 12px;
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    label {
      color: ${theme.color.textOpacity};
      font-size: ${theme.font.size.font12};
      line-height: ${theme.font.lineHeight.lh14};
      font-weight: ${theme.font.weight.bold};
    }
  `}
`

// prettier-ignore
export const Field = styled.div<FieldProps>`
  ${({ theme, isValid }) => css`
    position: relative;
    display: flex;
    flex-direction: column;

    span {
      color: ${theme.color.error};
      font-size: ${theme.font.size.font12};
      line-height: ${theme.font.lineHeight.lh14};
      position: absolute;
      bottom: -16px;
    }

    ${isValid && css`
      input {
        border: 1px solid ${theme.color.error};
      }
    `}
  `}
`

export const CardData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`

export const Input = styled.input`
  ${({ theme }) => css`
    border: 1px solid ${theme.color.borderDarkest};
    height: 45px;
    width: 100%;
    padding: 0 8px;
    border-radius: ${theme.border.radius};
    margin-top: 4px;

    color: ${theme.color.text};
    font-size: ${theme.font.size.font16};
    line-height: ${theme.font.lineHeight.lh19};
    letter-spacing: 1.37px;

    &::placeholder {
      color: ${theme.color.placeholder};
      font-size: ${theme.font.size.font16};
      line-height: ${theme.font.lineHeight.lh19};
      letter-spacing: 1.37px;
    }
  `}
`

export const InputCreditCard = styled(InputMask)`
  ${({ theme }) => css`
    border: 1px solid ${theme.color.borderDarkest};
    height: 45px;
    width: 100%;
    padding: 0 8px;
    border-radius: ${theme.border.radius};
    margin-top: 4px;

    color: ${theme.color.text};
    font-size: ${theme.font.size.font16};
    line-height: ${theme.font.lineHeight.lh19};
    letter-spacing: 1.37px;

    &::placeholder {
      color: ${theme.color.placeholder};
      font-size: ${theme.font.size.font16};
      line-height: ${theme.font.lineHeight.lh19};
      letter-spacing: 1.37px;
    }
  `}
`

export const Price = styled.section`
  ${({ theme }) => css`
    margin-top: 16px;
    border: 1px solid ${theme.color.borderDark};
    border-radius: ${theme.border.radius};
    padding: 12px;
  `}
`

export const Button = styled.section`
  margin-top: 16px;
`
