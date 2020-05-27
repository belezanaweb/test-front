import { init, RematchRootState } from '@rematch/core';
import createPersistPlugin from '@rematch/persist';

import * as models from './models';

const persist = createPersistPlugin({});

const store = init({
  models,
  plugins: [persist],
});

export type Dispatch = typeof store.dispatch;
export type State = RematchRootState<typeof models>

export default store;
