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

declare module '*.ico' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.css' {
  const css: { [key: string]: string };
  export default css;
}

declare module '*.css' {
  export default any;
}

declare const __BROWSER__: boolean;
declare const __SERVER__: boolean;

interface Window {
    browserHistory: any;
    store: any;
    __PRELOADED_STATE__: any;
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __REDUX_STATE__: any;
}

declare module 'express-manifest-helpers';

declare global {
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
