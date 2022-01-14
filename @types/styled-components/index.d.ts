import 'styled-components'

import AppTheme from '../../src/styles/Theme'

declare module 'styled-components' {
  type Theme = typeof AppTheme

  export interface DefaultTheme extends Theme {}
}
