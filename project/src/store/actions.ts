import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';

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
