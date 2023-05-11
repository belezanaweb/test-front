import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 28px 20px;
  background-color: ${(props) => props.theme.colors.white};

  ${media.greaterThan('medium')`
    max-width: 320px;
  `}
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Text = styled.p`
  font-size: ${(props) => props.theme.font.size.small};
`

export const Discount = styled(Text)`
  color: ${(props) => props.theme.colors.purple};
  font-weight: 700;
`

export const TextTotal = styled(Text)`
  font-weight: bold;
  font-size: ${(props) => props.theme.font.size.medium};
`

export const ButtonWrapper = styled.div`
  margin-top: 18px;
`
