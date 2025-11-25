import type { RouteObject } from 'react-router-dom';

import { RouterManager } from './manager';
import Layout from '../wrappers/layout';

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: RouterManager.path('home'),
        lazy: () => import('@pages/home').then((module) => ({ Component: module.default })),
      },
      {
        path: RouterManager.path('login'),
        lazy: () => import('@pages/login').then((module) => ({ Component: module.default })),
      },
      {
        path: RouterManager.path('detail'),
        lazy: () => import('@pages/detail').then((module) => ({ Component: module.default })),
      },
    ],
  },
];
