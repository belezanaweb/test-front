// import original module declarations
import 'styled-components'
// import your custom theme
import { ITheme } from './ui/theme/types'

declare module 'styled-components' {
  // eslint-disable-next-line prettier/prettier
  export interface DefaultTheme extends ITheme { }
}
