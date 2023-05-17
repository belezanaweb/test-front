import 'styled-components'

import Theme from './Theme'

export type ITheme = typeof Theme

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}