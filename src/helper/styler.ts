import jss from 'jss';
import jssCamelCase from 'jss-plugin-camel-case';
import jssNested from 'jss-plugin-nested';
import jssDefaultUnit from 'jss-plugin-default-unit';
import { Style } from 'jss/css';
import { Theme } from './theme';

export type Styles<Name extends string = any> = Record<
  Name,
  Style | Record<string, Style>
>;

export function createJssStyle<Name extends string>(
  styleCreator: (theme: Theme) => Partial<Styles<Name>>
) {
  const plugins: any[] = [jssCamelCase(), jssNested(), jssDefaultUnit()];
  jss.use(...plugins);
  const theme = new Theme();
  return jss.createStyleSheet(styleCreator(theme)).attach();
}
