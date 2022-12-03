import { createReducer } from '@reduxjs/toolkit';
import {
  requireAuthorization,
  loadUserData,
  setDataLoadingStatus,
  changeCity,
  setActiveSort,
  loadOffers,
  loadOtherOffers,
  loadSelectedOffer,
  loadReviews
} from './actions';
import { AuthorizationStatus, ACTIVE_CITY, ACTIVE_SORT } from '../const';
import { UserData } from '../types/user-data';
import { Offer } from '../types/offer';
import { InitialState } from '../types/initial-state';

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {} as UserData,
  isDataLoading: false,
  activeCity: ACTIVE_CITY,
  activeSort: ACTIVE_SORT,
  offers: [] as Offer[],
  selectedOffer: null,
  otherOffers: null,
  reviews: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(loadUserData, (state, action) => {
    state.userData = action.payload;
  });
  builder.addCase(setDataLoadingStatus, (state, action) => {
    state.isDataLoading = action.payload;
  });
  builder.addCase(changeCity, (state, action) => {
    state.activeCity = action.payload;
  });
  builder.addCase(setActiveSort, (state, action) => {
    state.activeSort = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
  });
  builder.addCase(loadSelectedOffer, (state, action) => {
    state.selectedOffer = action.payload;
  });
  builder.addCase(loadOtherOffers, (state, action) => {
    state.otherOffers = action.payload;
  });
  builder.addCase(loadReviews, (state, action) => {
    state.reviews = action.payload;
  });
});

export { reducer };
