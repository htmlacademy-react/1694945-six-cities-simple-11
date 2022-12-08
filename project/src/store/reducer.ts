import { createReducer } from '@reduxjs/toolkit';
import {
  loadOtherOffers,
  loadSelectedOffer,
  loadReviews,
  setReviewFormBlocked
} from './actions';
import { InitialState } from '../types/initial-state';

const initialState: InitialState = {
  selectedOffer: null,
  otherOffers: null,
  reviews: null,
  isReviewFormBlocked: false,
};

const reducer = createReducer(initialState, (builder) => {
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
