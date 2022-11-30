import { createReducer } from '@reduxjs/toolkit';
import {
  requireAuthorization,
  changeCity,
  loadOffers,
  setActiveSort
} from './actions';
import {
  AuthorizationStatus,
  ACTIVE_CITY,
  ACTIVE_SORT
} from '../const';
import { OFFERS } from '../mocks/offers';
import { REVIEWS } from '../mocks/reviews';

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  activeCity: ACTIVE_CITY,
  activeSort: ACTIVE_SORT,
  offers: OFFERS,
  reviews: REVIEWS,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(changeCity, (state, action) => {
    state.activeCity = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
  });
  builder.addCase(setActiveSort, (state, action) => {
    state.activeSort = action.payload;
  });
});

export { reducer };
