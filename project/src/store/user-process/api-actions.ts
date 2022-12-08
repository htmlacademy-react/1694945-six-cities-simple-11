import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state.js';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/user-data';
import { APIRoute, AppRoute } from '../../const';
import { saveToken, dropToken } from '../../services/token';
import { loadUserData, redirectToRoute } from '../actions';

export const checkAuthorizeAction = createAsyncThunk<
  void,
  null,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuthorization', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<UserData>(APIRoute.Login);
  dispatch(loadUserData(data));
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, {
      email,
      password,
    });
    saveToken(data.token);
    dispatch(loadUserData(data));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  null,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});
