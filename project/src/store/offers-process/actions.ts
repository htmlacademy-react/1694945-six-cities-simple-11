import { createAction } from '@reduxjs/toolkit';
import { City } from '../../types/city';

export const setActiveCity = createAction(
  'data/setActiveCity',
  (city: City) => ({ payload: city })
);

export const setActiveSort = createAction(
  'data/setActiveSort',
  (sort: string) => ({ payload: sort })
);
