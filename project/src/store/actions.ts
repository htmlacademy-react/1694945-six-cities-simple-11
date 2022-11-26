import {createAction} from '@reduxjs/toolkit';
import { City } from '../types/city';

export const changeCity = createAction(
  'city/changeCity',
  (city: City) => ({payload: city})
);
export const updateOffersList = createAction('offers/updateOffersList');
