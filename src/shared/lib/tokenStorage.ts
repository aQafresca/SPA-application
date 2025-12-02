import { LocalStorageKeys } from '@/constants';

export const tokenStorage = {
  get(): string | null {
    return localStorage.getItem(LocalStorageKeys.TOKEN);
  },
  set(token: string) {
    return localStorage.setItem(LocalStorageKeys.TOKEN, token);
  },
  clear() {
    return localStorage.removeItem(LocalStorageKeys.TOKEN);
  },
};
