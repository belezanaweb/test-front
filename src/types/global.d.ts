/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType } from 'react';
import { Store } from 'redux';
import { match } from 'react-router-dom';
import { AppState } from '../shared/store';

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
    __REDUX_STATE__?: AppState;
    __REDUX_DEVTOOLS_EXTENSION__?: () => any;
  }

  interface BaseState<T> {
    data: T | null;
    loading: boolean;
    error: string | unknown;
  }

  export interface Context<T> {
    store: Store<AppState>;
    match: match<T>;
    search: string;
  }

  type Preload<T> = (ctx: Context<T>) => Promise<unknown>;
  type Container<T> = ComponentType<T> & { preload?: Preload<T> };

  type ActionCreator<T extends string> = (...args: any[]) => { type: T };

  type ActionTypes<T extends any> = T extends ActionCreator<any>
    ? ReturnType<T>
    : T extends Record<string, any>
    ? { [k in keyof T]: ActionTypes<T[k]> }[keyof T]
    : never;
}

declare module 'react' {
  interface Attributes {
    css?: any;
  }
}
