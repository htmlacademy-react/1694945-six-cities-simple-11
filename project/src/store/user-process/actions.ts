import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../../const';
import { UserData } from '../../types/user-data';

export const redirectToRoute = createAction(
  'app/redirectToRoute',
  (route: AppRoute) => ({payload: route})
);

export const loadUserData = createAction(
  'user/loadUserData',
  (userData: UserData) => ({payload: userData})
);
