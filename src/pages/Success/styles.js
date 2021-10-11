import styled from 'styled-components'
import theme from '../../styles/theme'

export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid ${theme.colors.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${theme.size[1]};
`
export const SuccessText = styled.h5`
  color: ${theme.colors.primary};
  font-size: ${theme.size[3]};
  text-transform: uppercase;

  ${theme.media.desktop} {
    font-size: ${theme.size[4]};
  }
`

export const SuccessContainer = styled.div`
  display: block;
  text-align: -webkit-center;
  margin-top: ${theme.spacing.xs};
  margin-bottom: ${theme.size[5]};
`
export const Text = styled.p`
  margin-bottom: 2px;
  font-size: ${theme.size[3]};
  text-transform: uppercase;
  color: ${theme.colors.grayDark};
`
