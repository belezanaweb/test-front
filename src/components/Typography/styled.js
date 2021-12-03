import styled from 'styled-components'
import theme from 'theme'

const defaultProps = {
  color: 'default',
  bold: false,
  uppercase: false
}

export const Heading1 = styled.h1`
  color: ${(props) => theme.colors[props.color][0]};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
`
Heading1.defaultProps = defaultProps

export const Heading2 = styled.h2`
  color: ${(props) => theme.colors[props.color][0]};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
`
Heading2.defaultProps = defaultProps

export const Heading3 = styled.h3`
  color: ${(props) => theme.colors[props.color][0]};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
`
Heading3.defaultProps = defaultProps

export const Heading4 = styled.h4`
  color: ${(props) => theme.colors[props.color][0]};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
`
Heading4.defaultProps = defaultProps

export const Heading5 = styled.h5`
  color: ${(props) => theme.colors[props.color][0]};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
`
Heading5.defaultProps = defaultProps

export const Heading6 = styled.h6`
  color: ${(props) => theme.colors[props.color][0]};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
`
Heading6.defaultProps = defaultProps

export const Paragraph = styled.p`
  color: ${(props) => theme.colors[props.color][0]};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
`
Paragraph.defaultProps = defaultProps

export const Span = styled.span`
  color: ${(props) => theme.colors[props.color][0]};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
`
Span.defaultProps = defaultProps
