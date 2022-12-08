import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../../const';

export const redirectToRoute = createAction(
  'app/redirectToRoute',
  (route: AppRoute) => ({payload: route})
);
export const setReviewFormBlocked = createAction(
  'data/setReviewFormBlocked',
  (status: boolean) => ({payload: status})
);
