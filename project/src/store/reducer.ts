import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  setActiveSort
} from './actions';
import {
  ACTIVE_CITY,
  ACTIVE_SORT
} from '../const';
import { OFFERS } from '../mocks/offers';
import { REVIEWS } from '../mocks/reviews';

const initialState = {
  activeCity: ACTIVE_CITY,
  activeSort: ACTIVE_SORT,
  offers: OFFERS,
  reviews: REVIEWS,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.activeCity = action.payload;
  });
  builder.addCase(setActiveSort, (state, action) => {
    state.activeSort = action.payload;
  });
});

export { reducer };
