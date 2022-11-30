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
import { InitialState } from '../types/initial-state';

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  activeCity: ACTIVE_CITY,
  activeSort: ACTIVE_SORT,
  offers: [],
  reviews: [],
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
