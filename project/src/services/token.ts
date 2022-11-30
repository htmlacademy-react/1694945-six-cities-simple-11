import { AUTHORIZATION_TOKEN_KEY_NAME } from '../const';

type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTHORIZATION_TOKEN_KEY_NAME);
  return token ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTHORIZATION_TOKEN_KEY_NAME, token);
};

export const removeToken = (): void => {
  localStorage.removeItem(AUTHORIZATION_TOKEN_KEY_NAME);
};
