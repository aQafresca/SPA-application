import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const getApiErrorMessage = (error: unknown): string => {
  if (isFetchBaseQueryError(error)) {
    const data = error.data as { message?: string; error?: string };

    return data?.message ?? data?.error ?? 'Request failed';
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Unexpected error';
};

const isFetchBaseQueryError = (error: unknown): error is FetchBaseQueryError => {
  return typeof error === 'object' && error !== null && 'status' in error;
};
