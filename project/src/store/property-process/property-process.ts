import { createSlice } from '@reduxjs/toolkit';
import { store } from '../store';
import { PropertiesProcess } from '../../types/state';
import {
  fetchSelectedOfferAction,
  fetchOtherOffersAction,
  fetchReviewsAction,
  sendReviewAction,
} from './api-actions';
import { redirectToRoute } from '../actions';
import { Review } from '../../types/review';
import { NameSpace, AppRoute } from '../../const';

const initialState: PropertiesProcess = {
  selectedOffer: null,
  isSelectedOfferLoading: false,
  hasSelectedOfferLoadingError: false,
  otherOffers: null,
  areOtherOffersLoading: false,
  areOtherOffersLoadingError: false,
  areReviewsLoading: false,
  hasReviewsLoadingError: false,
  reviews: [] as Review[] | null,
  isReviewFormBlocked: false,
  hasReviewSendingError: false,
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
        store.dispatch(redirectToRoute(AppRoute.NotFound));
      })
      .addCase(fetchOtherOffersAction.pending, (state) => {
        state.areOtherOffersLoading = true;
      })
      .addCase(fetchOtherOffersAction.fulfilled, (state, action) => {
        state.areOtherOffersLoading = false;
        state.otherOffers = action.payload;
      })
      .addCase(fetchSelectedOfferAction.rejected, (state) => {
        state.areOtherOffersLoading = false;
        state.hasSelectedOfferLoadingError = true;
        state.otherOffers = null;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.areReviewsLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.areReviewsLoading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchSelectedOfferAction.rejected, (state) => {
        state.areReviewsLoading = false;
        state.hasReviewsLoadingError = true;
        state.reviews = null;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.isReviewFormBlocked = true;
      })
      .addCase(sendReviewAction.fulfilled, (state) => {
        state.isReviewFormBlocked = false;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.isReviewFormBlocked = false;
        state.hasReviewSendingError = true;
      });
  },
});
