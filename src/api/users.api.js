import httpClient from './httpClient';

const END_POINT = '/users';

export const getAllUsers = (url = END_POINT) => {
  return httpClient.get(url);
};
