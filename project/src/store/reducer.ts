import { createReducer } from '@reduxjs/toolkit';
import {
  //requireAuthorization,
  loadUserData,
  setOffersLoadingStatus,
  changeCity,
  changeSort,
  loadOffers,
  loadOtherOffers,
  loadSelectedOffer,
  loadReviews,
  setReviewFormBlocked
} from './actions';
import { ACTIVE_CITY, ACTIVE_SORT } from '../const';
import { UserData } from '../types/user-data';
import { Offer } from '../types/offer';
import { InitialState } from '../types/initial-state';

const initialState: InitialState = {
  userData: {} as UserData,
  areOffersLoading: false,
  activeCity: ACTIVE_CITY,
  activeSort: ACTIVE_SORT,
  offers: [] as Offer[],
  selectedOffer: null,
  otherOffers: null,
  reviews: null,
  isReviewFormBlocked: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadUserData, (state, action) => {
    state.userData = action.payload;
  });
  builder.addCase(setOffersLoadingStatus, (state, action) => {
    state.areOffersLoading = action.payload;
  });
  builder.addCase(changeCity, (state, action) => {
    state.activeCity = action.payload;
  });
  builder.addCase(changeSort, (state, action) => {
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
  builder.addCase(setReviewFormBlocked, (state, action) => {
    state.isReviewFormBlocked = action.payload;
  });
});

export { reducer };
