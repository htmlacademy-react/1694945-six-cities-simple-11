import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import {AuthorizationStatus} from '../const';

export const requireAuthorization = createAction(
  'user/requireAuthorization',
  (status: AuthorizationStatus) => ({payload: status})
);
export const changeCity = createAction(
  'city/changeCity',
  (city: City) => ({ payload: city })
);
export const loadOffers = createAction(
  'offers/loadOffers',
  (offers: Offer[]) => ({payload: offers})
);
export const setActiveSort = createAction(
  'sort/setActiveSort',
  (sort: string) => ({ payload: sort })
);
export const setError = createAction(
  'data/setError',
  (error: string | null) => ({payload: error})
);

export const setOffersDataLoadingStatus = createAction(
  'data/setOffersDataLoadingStatus',
  (status: boolean) => ({payload: status})
);

