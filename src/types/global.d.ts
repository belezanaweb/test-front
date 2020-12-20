/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType } from 'react';
import { Store } from 'redux';
import { match } from 'react-router-dom';
import { ApplicationState } from '../shared/store';

declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
  }
}

declare global {
  interface NodeModule {
    hot?: any;
  }

  interface Window {
    __REDUX_STATE__?: ApplicationState;
    __REDUX_DEVTOOLS_EXTENSION__?: () => any;
  }

  export interface Context<T> {
    store: Store<ApplicationState>;
    match: match<T>;
    search: string;
  }

  type Preload<T> = (ctx: Context<T>) => Promise<unknown>;
  type Container<T> = ComponentType<T> & { preload?: Preload<T> };
}
