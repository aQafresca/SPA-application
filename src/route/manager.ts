import { Manager } from '@lomray/react-route-manager';

export const RouterManager = new Manager({
  routes: {
    home: {
      url: '/',
    },
    login: {
      url: '/login',
    },
    detail: {
      url: '/detail/:id',
      params: {
        id: 0,
      },
    },
  },
});
