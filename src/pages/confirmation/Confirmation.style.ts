import styled from 'styled-components'

export const SuccessBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CheckImage = styled.img`
  margin: 2px 0 12px;
`

export const SuccessParagraph = styled.p(
  ({ theme }) => `
color: ${theme.colors.accent};
font-size: ${theme.fonts.highlightText};

text-align: center;
font-weight: 700;
line-height: 17px;
text-transform: uppercase;
margin: 0;
`
)

export const ConfirmationDataParagraph = styled.p(
  ({ theme }) => `
  color: ${theme.colors.black};
  font-size: ${theme.fonts.highlightText};
  margin: 0;
  text-transform: uppercase;
  line-height: 17px;
`
)
