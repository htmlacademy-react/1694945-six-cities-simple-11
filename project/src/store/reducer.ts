import { createReducer } from '@reduxjs/toolkit';
import {
  requireAuthorization,
  changeCity,
  loadOffers,
  setActiveSort,
  checkError,
} from './actions';
import { AuthorizationStatus, ACTIVE_CITY, ACTIVE_SORT } from '../const';
import { InitialState } from '../types/initial-state';

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  activeCity: ACTIVE_CITY,
  activeSort: ACTIVE_SORT,
  offers: [],
  reviews: [],
  error: null,
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
  builder.addCase(checkError, (state, action) => {
    state.error = action.payload;
  });
});

export { reducer };
