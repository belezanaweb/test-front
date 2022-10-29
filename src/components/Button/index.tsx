import React from 'react'
import ButtonMaterial from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { colors } from '../../utils/style-config'

const theme = createTheme({
  palette: {
    primary: {
      main: colors.buttonDefault,
      contrastText: colors.textButton
    }
  },
  typography: {
    fontFamily: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'].join(',')
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          '&:hover': {
            backgroundColor: colors.buttonHover
          }
        })
      }
    }
  }
})

interface IProps {
  textContent: string;
  onClick?: () => void;
}

const Button = ({ textContent, onClick }: IProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonMaterial size="large" variant="contained" onClick={onClick}>
        {textContent}
      </ButtonMaterial>
    </ThemeProvider>
  )
}

export default Button
