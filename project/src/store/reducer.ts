import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './actions';
import { ACTIVE_CITY } from '../const';

const initialState = {
  city: ACTIVE_CITY,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state) => state);
});

export { reducer };
