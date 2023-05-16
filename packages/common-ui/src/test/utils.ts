import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ReactElement } from 'react';

export function customRender(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return {
    ...render(ui, options)
  }
}

export const user = userEvent.setup();

export * from '@testing-library/react';
