import styled from 'styled-components'

interface PaperBoxProps {
  isSolid: boolean
  paddingBottom?: boolean
}

export const PaperBox = styled.div<PaperBoxProps>(
  ({ theme, isSolid, paddingBottom = true }) => `
    padding: 12px 12px ${paddingBottom ? '12px' : '0'} 12px;
    border-radius: ${theme.borderRadius};
    background-color: ${isSolid ? theme.colors.white : ''};
    box-shadow: ${isSolid ? theme.shadows.paper : ''};
    border: ${isSolid ? 'none' : `1px solid ${theme.colors.lightGray}`};
  `
)
