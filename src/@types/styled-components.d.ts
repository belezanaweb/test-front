import 'styled-components';
import { standard } from '_theme/styles/themes';

type Standard = typeof standard;

declare module 'styled-components' {
  export interface DefaultTheme extends Standard {}
}
