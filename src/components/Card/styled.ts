import styled from 'styled-components'

export const Wrapper = styled.div`
  border: ${({ theme }) => theme.border.width.thin} ${({ theme }) => theme.border.style.solid}
    ${({ theme }) => theme.color['grey-weak']};
  border-radius: ${({ theme }) => theme.border.width.thick};
  width: 100%;
  display: flex;
  background: ${({ theme }) => theme.color.white};
  padding: 26px ${({ theme }) => theme.padding.p6};
  box-sizing: border-box;
`
