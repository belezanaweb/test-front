import { defineStyleConfig, extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  fonts: { body: 'Arial', heading: 'Arial' },
  styles: {
    global: () => ({
      body: {
        bg: '#F5F5F5'
      }
    })
  }
})

export default theme
