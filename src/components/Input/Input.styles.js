import styled from 'styled-components'

export const InputStyled = styled.input(
  ({ size, valid }) => `
  box-sizing: border-box;
  height: 45px;
  width: ${size}px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #e0e7ee;
  }
  &:focus {
    outline: none;
    border: 1px solid #a43287;
  }

  input:required:focus {
    border: 1px solid red;
    outline: none;
  }
  textarea:required:focus {
    border: 1px solid red;
    outline: none;
  }
`
)

export const LabelStyled = styled.div`
  height: 14px;
  width: 129.71px;
  color: #ccc;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 14px;
`

export const DivStyled = styled.div`
  height: 64px;
  width: 320px;
}
`
