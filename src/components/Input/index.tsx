import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { Container } from './styles'
import { colors } from '../../utils/style-config'

const theme = createTheme({
  palette: {
    primary: {
      main: colors.inputFocusColor
    }
  },
  typography: {
    fontFamily: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'].join(',')
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: { size: 'small' },
          style: {
            width: 320,
            height: 45,
            fontWeight: 700
          }
        }
      ]
    }
  }
})

interface IProps {
  label: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const Input = ({ label, placeholder, error, helperText, onChange }: IProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <label>{label}</label>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          error={error}
          placeholder={placeholder}
          helperText={helperText}
          onChange={onChange}
        />
      </Container>
    </ThemeProvider>
  )
}

export default Input
