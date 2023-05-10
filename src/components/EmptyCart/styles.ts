import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 12px;
  text-align: center;
`

export const IconWrapper = styled.div`
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${(props) => props.theme.colors.gray01};
  margin-bottom: 20px;
`

export const Title = styled.h1`
  font-size: ${(props) => props.theme.font.size.xlarge};
  font-weight: 600;
  margin-bottom: 1rem;
`

export const Description = styled.p`
  font-size: ${(props) => props.theme.font.size.large};
`
