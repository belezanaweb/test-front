import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial;
    padding: ${({ theme }) => theme.margin.m10};
  }

 ::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: ${({ theme }) => theme.color['grey-weak']};
}

::-webkit-scrollbar {
	width: ${({ theme }) => theme.border.width.thick};
	background-color: ${({ theme }) => theme.color['grey-weak']};
}

::-webkit-scrollbar-thumb {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: ${({ theme }) => theme.color['grey-strong']};
}
`

export const Wrapper = styled.div`
  display: flex;
`
