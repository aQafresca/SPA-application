import type { RouteObject } from 'react-router-dom';

import { RouterManager } from '@/route/manager';
import Layout from '@/wrappers/layout';
import PrivateRoute from '@/wrappers/route/private';
import PublicRoute from '@/wrappers/route/public';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          {
            path: RouterManager.path('login'),
            lazy: () => import('@pages/login').then((module) => ({ Component: module.default })),
          },
        ],
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: RouterManager.path('home'),
            lazy: () => import('@pages/home').then((module) => ({ Component: module.default })),
          },

          {
            path: RouterManager.path('detail'),
            lazy: () => import('@pages/detail').then((module) => ({ Component: module.default })),
          },
        ],
      },
      {
        path: '*',
        lazy: () => import('@pages/not-found').then((module) => ({ Component: module.default })),
      },
    ],
  },
];
