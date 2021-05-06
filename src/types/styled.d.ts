/* eslint-disable @typescript-eslint/no-empty-interface */
import "styled-components";

import { light as lightTheme } from "../components/Theme/config";

export type Theme = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
