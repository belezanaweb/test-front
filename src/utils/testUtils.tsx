import React, { ReactElement } from 'react';

import theme, { Theming } from '../theme';

export function provider(component: ReactElement, render: (component: ReactElement) => any) {
  return render(
    <Theming theme={theme}>
      {component}
    </Theming>
  );
}
