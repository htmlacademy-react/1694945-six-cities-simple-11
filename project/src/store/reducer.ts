import { createReducer } from '@reduxjs/toolkit';
import {
  requireAuthorization,
  loadUserData,
  changeCity,
  loadOffers,
  setActiveSort,
  setOffersDataLoadingStatus
} from './actions';
import { AuthorizationStatus, ACTIVE_CITY, ACTIVE_SORT } from '../const';
import { UserData } from '../types/user-data';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { InitialState } from '../types/initial-state';

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {} as UserData,
  isOffersDataLoading: false,
  activeCity: ACTIVE_CITY,
  activeSort: ACTIVE_SORT,
  offers: [] as Offer[],
  reviews: [] as Review[],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(loadUserData, (state, action) => {
    state.userData = action.payload;
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
  builder.addCase(setOffersDataLoadingStatus, (state, action) => {
    state.isOffersDataLoading = action.payload;
  });
});

export { reducer };
