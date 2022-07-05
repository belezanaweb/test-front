import styled from 'styled-components'

interface PaperBoxProps {
  isSolid: boolean
}

export const PaperBox = styled.section<PaperBoxProps>(
  ({ theme, isSolid }) => `
  padding: 12px;
  border-radius: ${theme.borderRadius};
  background-color: ${isSolid ? theme.colors.white : ''};
  box-shadow: ${isSolid ? theme.shadows.paper : ''};
  border: ${isSolid ? 'none' : `1px solid ${theme.colors.disabled}`};
  `
)
