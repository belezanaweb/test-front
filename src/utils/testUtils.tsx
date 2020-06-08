import React, { ReactElement } from 'react';
import { RenderResult } from '@testing-library/react';

import theme, { Theming } from '../theme';

export function provider(component: ReactElement, render: (component: ReactElement) => any): RenderResult {
  return render(
    <Theming theme={theme}>
      {component}
    </Theming>
  );
}
