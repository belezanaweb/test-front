import * as React from 'react';
import loadable from '@loadable/component';

const HomePage = loadable(() => import('./screens/home'));
const ErrorPage = loadable(() => import('./screens/not-found'));

export interface RouteConfig {
  path: string;
  exact?: boolean;
  routes?: RouteConfig[];
  component: React.ComponentType;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '*',
    component: ErrorPage,
  },
];
