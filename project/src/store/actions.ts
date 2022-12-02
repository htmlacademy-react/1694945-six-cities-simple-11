import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { UserData } from '../types/user-data';
import { AppRoute, AuthorizationStatus } from '../const';

export const redirectToRoute = createAction(
  'app/redirectToRoute',
  (route: AppRoute) => ({payload: route})
);

export const requireAuthorization = createAction(
  'user/requireAuthorization',
  (status: AuthorizationStatus) => ({payload: status})
);

export const loadUserData = createAction(
  'user/loadUserData',
  (userData: UserData) => ({payload: userData})
);

export const changeCity = createAction(
  'data/changeCity',
  (city: City) => ({ payload: city })
);

export const loadOffers = createAction(
  'data/loadOffers',
  (offers: Offer[]) => ({payload: offers})
);

export const loadOtherOffers = createAction(
  'data/loadOtherOffers',
  (otherOffers: Offer[]) => ({payload: otherOffers})
);

export const setActiveSort = createAction(
  'data/setActiveSort',
  (sort: string) => ({ payload: sort })
);

export const setDataLoadingStatus = createAction(
  'data/setDataLoadingStatus',
  (status: boolean) => ({payload: status})
);

