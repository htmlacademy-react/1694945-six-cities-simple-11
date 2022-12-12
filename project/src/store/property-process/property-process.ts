import { createSlice } from '@reduxjs/toolkit';
import { PropertyProcess } from '../../types/state';
import {
  fetchSelectedOfferAction,
  fetchOtherOffersAction,
  fetchReviewsAction,
  sendReviewAction,
} from './api-actions';
import { Review } from '../../types/review';
import { NameSpace } from '../../const';

const initialState: PropertyProcess = {
  selectedOffer: null,
  isSelectedOfferLoading: false,
  hasSelectedOfferLoadingError: false,
  otherOffers: null,
  reviews: [] as Review[] | null,
  isReviewFormBlocked: false,
};

export const propertyProcess = createSlice({
  name: NameSpace.Property,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSelectedOfferAction.pending, (state) => {
        state.isSelectedOfferLoading = true;
        state.hasSelectedOfferLoadingError = false;
      })
      .addCase(fetchSelectedOfferAction.fulfilled, (state, action) => {
        state.isSelectedOfferLoading = false;
        state.selectedOffer = action.payload;
      })
      .addCase(fetchSelectedOfferAction.rejected, (state) => {
        state.isSelectedOfferLoading = false;
        state.hasSelectedOfferLoadingError = true;
      })
      .addCase(fetchOtherOffersAction.fulfilled, (state, action) => {
        state.otherOffers = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.isReviewFormBlocked = true;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewFormBlocked = false;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.isReviewFormBlocked = false;
      });
  },
});
