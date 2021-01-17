import 'styled-components'

import { ITheme } from './types'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme { }
}
